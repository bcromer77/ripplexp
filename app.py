import streamlit as st
import random
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
    unique_tag = ''.join(random.choices("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", k=10))
    return unique_tag

# Function to create a script with unique word combinations
def create_script(title, description):
    words = set(title.split() + description.split())
    script = " ".join(random.sample(words, min(len(words), 10)))  # Randomly select 10 words
    return script

# Function to monitor SERP features (Placeholder for now)
def monitor_serp(video_url):
    serp_data = {
        "Video Carousel": "Not Found",
        "Shopping Feeds": "Not Applicable",
        "People Also Ask (PAA)": "Not Found",
        "FAQs": "Not Found",
        "Snippets": "Not Found"
    }
    return serp_data

# Function to generate random trending tags
def generate_trending_tags(categories, count=10):
    tags = []
    for _ in range(count):
        category = random.choice(categories)
        tags.append(category)
    return tags

# List of Categories for Trending Tags
categories = ["Makeup", "Haircare", "Beauty Hacks", "Skincare", "DIY Tutorials", "Trending Looks"]

# Colors for Buttons
button_colors = ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#DAF7A6", "#C70039"]

# Main Content
st.title("RippleXp Boost Video Visibility")
st.write("### Get the right eyes on your videos, in seconds")

# Trending Tags Section
st.write("## Trending Tags - Makeup & Haircare")
st.write("### See what's trending in the last 24 hours")
tags = generate_trending_tags(categories, count=15)
for i, tag in enumerate(tags):
    color = button_colors[i % len(button_colors)]  # Cycle through colors
    st.markdown(
        f"""
        <div style="
            display:inline-block;
            margin: 5px;
            padding: 10px 20px;
            color: white;
            background-color: {color};
            border-radius: 20px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;">
            {tag}
        </div>
        """, unsafe_allow_html=True
    )

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
