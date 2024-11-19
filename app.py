import streamlit as st

# Heatmap color scale function
def get_heatmap_color(popularity_score):
    if popularity_score > 70:
        return "red"
    elif 40 <= popularity_score <= 70:
        return "orange"
    else:
        return "lightgray"

# Sample tag data with popularity scores
tags = [
    {"name": "Mascara", "popularity": 85},
    {"name": "Skincare Routine", "popularity": 65},
    {"name": "Concealer", "popularity": 45},
    {"name": "Eyeliner", "popularity": 30},
    {"name": "Makeup Brushes", "popularity": 75},
    {"name": "Haircare Tips", "popularity": 50},
    {"name": "Bronzer", "popularity": 20},
    {"name": "Red Lipstick", "popularity": 90},
    {"name": "Peach Blusher", "popularity": 55},
    {"name": "Eye Shadow", "popularity": 40},
]

st.title("Discover Trends. Boost Video Reach.")
st.subheader("Discover what's being said on YouTube right now!")
st.markdown("---")

# Display heatmap for trending tags
st.markdown("### Trending Tags: What's Hot Right Now")
cols = st.columns(4)  # Display in a grid of 4 columns

for i, tag in enumerate(tags):
    color = get_heatmap_color(tag["popularity"])
    with cols[i % 4]:
        st.markdown(
            f"<div style='padding:10px; margin:5px; background-color:{color}; border-radius:8px; text-align:center; color:white; font-weight:bold;'>{tag['name']}</div>",
            unsafe_allow_html=True,
        )

# Add a YouTube video carousel for inspiration
st.markdown("### Discover Tools & Trends")
video_urls = [
    "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
]

for url in video_urls:
    st.video(url)

# Input section
st.markdown("### Get Started")
input_type = st.radio("Select an input type:", ["Paste YouTube Link", "Upload Video File"])
if input_type == "Paste YouTube Link":
    youtube_link = st.text_input("Paste your YouTube link here:")
else:
    video_file = st.file_uploader("Upload your video file here:", type=["mp4", "mov"])
st.button("Get Started Free")
