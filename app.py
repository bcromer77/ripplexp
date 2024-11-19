import streamlit as st
from googleapiclient.discovery import build  # YouTube Data API

# Set Page Configuration
st.set_page_config(page_title="RippleXp - Keyword Optimizer", layout="centered")

# YouTube Data API Key
API_KEY = "YOUR_YOUTUBE_API_KEY"  # Replace with your YouTube Data API key
youtube = build('youtube', 'v3', developerKey=API_KEY)

# Function to validate and extract YouTube video ID
def extract_video_id(video_url):
    if "youtube.com/watch" in video_url:
        video_id = video_url.split("v=")[-1]
        if "&" in video_id:
            video_id = video_id.split("&")[0]
        return video_id
    elif "youtu.be/" in video_url:
        return video_url.split("youtu.be/")[-1]
    else:
        raise ValueError("Invalid YouTube video link. Please provide a direct video URL.")

# Function to fetch video metadata using YouTube Data API
def fetch_video_metadata(video_id):
    request = youtube.videos().list(
        part="snippet",
        id=video_id
    )
    response = request.execute()
    snippet = response['items'][0]['snippet']
    title = snippet['title']
    description = snippet['description']
    return title, description

# Function to generate keywords from title and description
def generate_keywords(title, description):
    keywords = set(title.split() + description.split())
    keywords = {word.lower() for word in keywords if len(word) > 3}
    return sorted(keywords)

# Main Content
st.title("RippleXp Keyword Optimizer")
st.write("### Get the right eyes on your videos, in seconds")

# Input Section
option = st.radio("Select an input type:", ("Paste YouTube Link", "Upload Video File"))

if option == "Paste YouTube Link":
    video_link = st.text_input("Paste your YouTube link here:")
    if st.button("Get Started Free"):
        if video_link:
            try:
                video_id = extract_video_id(video_link)
                title, description = fetch_video_metadata(video_id)
                keywords = generate_keywords(title, description)

                # Display Results
                st.success("Video processed successfully!")
                st.write(f"**Title:** {title}")
                st.write(f"**Description:** {description[:150]}...")
                st.write("### Suggested Keywords:")
                for keyword in keywords:
                    st.write(f"- {keyword}")
            except ValueError as ve:
                st.error(f"Error: {ve}")
            except Exception as e:
                st.error(f"Error fetching video details: {e}")
        else:
            st.warning("Please enter a valid YouTube link.")
else:
    uploaded_file = st.file_uploader("Upload your video file here:", type=["mp4", "mov"])
    if st.button("Get Started Free"):
        if uploaded_file:
            # Placeholder for video file processing
            st.write("Uploaded file processed successfully!")
        else:
            st.warning("Please upload a valid video file.")
