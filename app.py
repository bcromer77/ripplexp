import streamlit as st
import random
from streamlit.components.v1 import html

# Title Section
st.title("RippleXp: Empower Your Reach")
st.markdown(
    "### Elevate your content with tools tailored for creators. Discover insights, trends, and tags that make your videos shine."
)

# Get Started Section
st.subheader("🎥 Get Started")
st.write("Paste your YouTube link or upload a video file to get personalized tags and insights.")
input_type = st.radio("Select an input type:", ("Paste YouTube Link", "Upload Video File"), horizontal=True)
if input_type == "Paste YouTube Link":
    youtube_link = st.text_input("Paste your YouTube link here:")
elif input_type == "Upload Video File":
    uploaded_file = st.file_uploader("Upload your video file here:", type=["mp4", "mov", "avi"])
st.button("Get Started Free")

# Discover Tools & Trends Section
st.subheader("Discover Tools & Trends")

col1, col2 = st.columns(2)
with col1:
    st.video("https://www.youtube.com/watch?v=RiP35vK3AG0")  # Replace with a valid YouTube URL
with col2:
    st.video("https://www.youtube.com/watch?v=Pe0tWjTRvEo")  # Replace with a valid YouTube URL

# Trending Tags Section
st.subheader("🌟 Trending Tags: What's Hot Right Now")

# Define trending tags with animations
tags = [
    "Mascara", "Makeup Brushes", "Setting Powder", "Eyebrow Pencil", "Concealer", "Foundation", "Matte Lipstick",
    "Red Lipstick", "Lip Liner", "Peach Blusher", "Eye Shadow", "Glossy Lipstick", "Pink Blusher", "Skincare Routine",
    "Bronzer"
]
colors = [
    "#FFB6C1", "#FF69B4", "#FFC0CB", "#FAEBD7", "#FFD700", "#F08080", "#FFA07A", "#F4A460", "#FF7F50", "#FF6347",
    "#FFDAB9", "#F5DEB3", "#FFFACD", "#FFE4B5", "#FFEFD5"
]
random.shuffle(tags)

# Display tags in a dynamic, grid-like format with animations
tag_columns = st.columns(5)
for i, tag in enumerate(tags):
    with tag_columns[i % 5]:
        html(
            f"""
            <div style="text-align:center; margin:10px; padding:10px; background:{random.choice(colors)}; 
                        border-radius:25px; color:white; font-size:14px; 
                        animation: pulse 2s infinite;">
                {tag}
            </div>
            <style>
                @keyframes pulse {{
                    0% {{ box-shadow: 0 0 5px #fff; }}
                    50% {{ box-shadow: 0 0 20px #ff69b4; }}
                    100% {{ box-shadow: 0 0 5px #fff; }}
                }}
            </style>
            """
        )

# Footer
st.markdown(
    "<hr style='border-top: 3px solid #f7cac9; margin:20px;'>",
    unsafe_allow_html=True
)
st.markdown("✨ Powered by RippleXp | Empowering Content Creators Everywhere ✨")
