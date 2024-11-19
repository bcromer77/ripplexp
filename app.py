import streamlit as st
import random

# Set background and styles
st.markdown(
    """
    <style>
        body {
            background-color: #FFF5F7;
            font-family: 'Arial', sans-serif;
        }
        .main-header {
            font-size: 2.5rem;
            font-weight: bold;
            color: #FF69B4;
            text-align: center;
        }
        .sub-header {
            font-size: 1.2rem;
            color: #333333;
            text-align: center;
            margin-top: -15px;
        }
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 20px;
            margin: 30px auto;
            width: 80%;
        }
        .tag-button {
            background: linear-gradient(135deg, #FFB6C1, #FF69B4);
            color: white;
            padding: 10px;
            border: none;
            border-radius: 20px;
            font-size: 0.9rem;
            text-align: center;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: all 0.3s ease-in-out;
        }
        .tag-button:hover {
            transform: scale(1.05);
            box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
        }
    </style>
    """,
    unsafe_allow_html=True,
)

# Header
st.markdown('<h1 class="main-header">RippleXp: Your Creator Toolkit</h1>', unsafe_allow_html=True)
st.markdown(
    '<p class="sub-header">Step into the spotlight with personalized tools, trending insights, and content magic.</p>',
    unsafe_allow_html=True,
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

# Carousel
st.video("https://www.youtube.com/watch?v=RiP35vK3AG0")  # Replace with valid YouTube URL
st.video("https://www.youtube.com/watch?v=Pe0tWjTRvEo")  # Replace with valid YouTube URL

# Trending Tags Section
st.subheader("🌟 Trending Tags: What's Hot Right Now")

tags = [
    "Mascara", "Makeup Brushes", "Setting Powder", "Eyebrow Pencil", "Concealer", "Foundation", "Matte Lipstick",
    "Red Lipstick", "Lip Liner", "Peach Blusher", "Eye Shadow", "Glossy Lipstick", "Pink Blusher", "Skincare Routine",
    "Bronzer"
]
random.shuffle(tags)

# Tag Buttons with Grid Layout
st.markdown('<div class="grid-container">', unsafe_allow_html=True)
for tag in tags:
    st.markdown(
        f'<button class="tag-button">{tag}</button>',
        unsafe_allow_html=True,
    )
st.markdown("</div>", unsafe_allow_html=True)

# Footer
st.markdown(
    "<hr style='border-top: 3px solid #ff69b4; margin:20px;'>",
    unsafe_allow_html=True,
)
st.markdown(
    "<p style='text-align:center; color:#FF69B4;'>✨ Powered by RippleXp | Empowering Content Creators Everywhere ✨</p>",
    unsafe_allow_html=True,
)
