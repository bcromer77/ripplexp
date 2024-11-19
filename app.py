import streamlit as st

# Page Configurations
st.set_page_config(page_title="RippleXp: Your Creator Toolkit", layout="wide")

# Header
st.markdown(
    """
    <style>
        body {
            background-color: #fef8fc;
            color: #333333;
            font-family: "Arial", sans-serif;
        }
        h1 {
            text-align: center;
            color: #ff69b4;
            font-size: 3rem;
            font-weight: bold;
        }
        h2 {
            text-align: center;
            color: #333;
            font-size: 1.5rem;
            font-weight: normal;
        }
    </style>
    """, unsafe_allow_html=True
)

st.markdown("<h1>RippleXp: Your Creator Toolkit</h1>", unsafe_allow_html=True)
st.markdown(
    "<h2>Effortlessly find trends, optimize your videos, and connect with your audience like never before.</h2>",
    unsafe_allow_html=True,
)

# Add a Divider
st.markdown("<hr style='margin:20px 0; border:none; border-top:1px solid #ddd;'>", unsafe_allow_html=True)

# Video Analysis Section
st.markdown("### 🎬 Analyze Your Video")
st.markdown(
    "<p style='color:#555; font-size:1rem;'>Paste your YouTube link or upload your video to generate personalized tags and insights.</p>",
    unsafe_allow_html=True,
)

# Input Section: YouTube Link
youtube_link = st.text_input(
    "Insert your YouTube link here:",
    placeholder="e.g., https://www.youtube.com/watch?v=example123",
    help="Paste your video link here to analyze content.",
)

# Upload Section: Video File
uploaded_file = st.file_uploader("Or upload your video file", type=["mp4", "mov", "avi"])

# Submit Button
if st.button("Submit"):
    if youtube_link:
        st.success(f"Analyzing YouTube link: {youtube_link}")
    elif uploaded_file:
        st.success("Uploading and analyzing your video...")
    else:
        st.error("Please provide a YouTube link or upload a video.")

# Add some space
st.markdown("<hr style='margin:20px 0; border:none; border-top:1px solid #ddd;'>", unsafe_allow_html=True)

# Trending Tags Section
st.markdown("### ✨ Trending Tags: What's Hot Right Now")
st.markdown(
    """
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 10px;
            margin: 20px 0;
        }
        .tag {
            background: linear-gradient(90deg, #ffb3c1, #b5e9f8);
            border-radius: 20px;
            padding: 10px 15px;
            text-align: center;
            font-weight: bold;
            color: #333;
            box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease, background 0.3s ease;
        }
        .tag:hover {
            transform: scale(1.1);
            background: linear-gradient(90deg, #ff69b4, #5cd3ff);
            color: #fff;
        }
    </style>
    """, unsafe_allow_html=True,
)

# Tags Grid
tags = [
    "Eye Shadow", "Concealer", "Glossy Lipstick", "Makeup Brushes",
    "Lip Liner", "Skincare Routine", "Foundation", "Pink Blusher",
    "Peach Blusher", "Bronzer", "Red Lipstick", "Setting Powder",
    "Mascara", "Matte Lipstick", "Eyebrow Pencil",
]

st.markdown('<div class="grid-container">', unsafe_allow_html=True)
for tag in tags:
    st.markdown(f'<div class="tag">{tag}</div>', unsafe_allow_html=True)
st.markdown('</div>', unsafe_allow_html=True)

# Add some space
st.markdown("<hr style='margin:20px 0; border:none; border-top:1px solid #ddd;'>", unsafe_allow_html=True)

# Discover Tools & Trends Section
st.markdown("### 🎥 Discover Tools & Trends")
st.markdown(
    """
    <style>
        .video-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin: 20px 0;
        }
        iframe {
            width: 100%;
            height: 300px;
            border-radius: 10px;
        }
    </style>
    """, unsafe_allow_html=True,
)

# Embed Videos
st.markdown('<div class="video-grid">', unsafe_allow_html=True)
st.markdown(
    '<iframe src="https://www.youtube.com/embed/1HtL2uXYziA" frameborder="0" allowfullscreen></iframe>',
    unsafe_allow_html=True,
)
st.markdown(
    '<iframe src="https://www.youtube.com/embed/LnHoqHscTKE" frameborder="0" allowfullscreen></iframe>',
    unsafe_allow_html=True,
)
st.markdown('</div>', unsafe_allow_html=True)

# Footer or additional info (optional)
st.markdown("<hr style='margin:20px 0; border:none; border-top:1px solid #ddd;'>", unsafe_allow_html=True)
st.markdown(
    "<p style='text-align: center; font-size: 0.9rem; color: #888;'>© 2024 RippleXp. Empowering Creators Worldwide.</p>",
    unsafe_allow_html=True,
)
