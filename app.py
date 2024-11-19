import streamlit as st
import random
import string
from googleapiclient.discovery import build  # YouTube Data API

# Set Page Configuration
st.set_page_config(page_title="RippleXp - Boost Video Visibility", layout="centered")

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

# Function to generate unique tags
def generate_unique_tag():
    unique_tag = ''.join(random.choices(string.ascii_letters + string.digits, k=20))
    return unique_tag

# Function to create a script with unique word combinations
def create_script(title, description):
    words = set(title.split() + description.split())
    script = " ".join(random.sample(words, min(len(words), 10)))  # Randomly select 10 words
    return script

# Function to monitor SERP features (Placeholder for now)
def monitor_serp(video_url):
    # Placeholder logic to simulate SERP monitoring
    serp_data = {
        "Video Carousel": "Not Found",
        "Shopping Feeds": "Not Applicable",
        "People Also Ask (PAA)": "Not Found",
        "FAQs": "Not Found",
        "Snippets": "Not Found"
    }
    return serp_data

# Main Content
st.title("RippleXp Boost Video Visibility")
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

                # Generate unique tag and script
                unique_tag = generate_unique_tag()
                script = create_script(title, description)

                # Display Results
                st.success("Video processed successfully!")
                st.write(f"**Title:** {title}")
                st.write(f"**Description:** {description[:150]}...")
                st.write(f"**Unique Tag for Video:** {unique_tag}")
                st.write("### Generated Script:")
                st.write(script)

                # Monitor SERPs (Simulated)
                st.write("### SERP Monitoring Results:")
                serp_data = monitor_serp(video_link)
                for feature, status in serp_data.items():
                    st.write(f"- **{feature}:** {status}")

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
            # Generate unique tag and script for uploaded file (Placeholder)
            unique_tag = generate_unique_tag()
            script = "This is a placeholder script for uploaded videos."

            st.success("Uploaded file processed successfully!")
            st.write(f"**Unique Tag for Video:** {unique_tag}")
            st.write("### Generated Script:")
            st.write(script)

            # Monitor SERPs (Simulated)
            st.write("### SERP Monitoring Results:")
            serp_data = monitor_serp("uploaded_video_placeholder")
            for feature, status in serp_data.items():
                st.write(f"- **{feature}:** {status}")
        else:
            st.warning("Please upload a valid video file.")
