import streamlit as st

# PAGE CONFIGURATION
st.set_page_config(page_title="You have made made your video, now find your audience", layout="wide")

# GLOBAL STYLES
st.markdown(
    """
    <style>
    body {
        background-color: #fff8f8;
        font-family: 'Inter', sans-serif;
    }
    .headline {
        font-size: 3rem;
        font-weight: bold;
        color: #ff89a0;
        text-align: center;
        margin-top: 20px;
    }
    .subheading {
        font-size: 1.2rem;
        color: #444444;
        text-align: center;
        margin-bottom: 30px;
    }
    .cta-button {
        background: linear-gradient(90deg, #ff89a0, #fcaeae);
        border: none;
        color: white;
        font-size: 1.2rem;
        padding: 12px 25px;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        transition: all 0.3s ease;
    }
    .cta-button:hover {
        background: linear-gradient(90deg, #fcaeae, #ff89a0);
        transform: scale(1.05);
    }
    .tag {
        text-align: center;
        background: linear-gradient(90deg, #ffdee9, #b5fffc);
        border-radius: 12px;
        padding: 10px;
        margin: 5px 0;
        color: #444;
        font-weight: bold;
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    .tag:hover {
        background: linear-gradient(90deg, #ff89a0, #b5fffc);
        color: white;
        transform: scale(1.05);
    }
    iframe {
        border-radius: 10px;
        margin: 10px 0;
    }
    </style>
    """,
    unsafe_allow_html=True,
)

# HEADER SECTION
st.markdown("<div class='headline'>You have made made your video, now find your audience</div>", unsafe_allow_html=True)
st.markdown(
    "<div class='subheading'>Tags and handles to magnify your Ripple.</div>",
    unsafe_allow_html=True,
)

# Input Section
youtube_link = st.text_input(
    "Insert your YouTube link here:",
    placeholder="e.g., https://www.youtube.com/watch?v=example123",
    help="Paste your video link here to analyze content.",
)

# Upload Section
uploaded_file = st.file_uploader("Or upload your video file", type=["mp4", "mov", "avi"])

# "Find you Audience" Button
st.markdown("<div style='text-align:center; margin-top:20px;'>", unsafe_allow_html=True)
st.markdown("<button class='cta-button'>Find your Audience</button>", unsafe_allow_html=True)
st.markdown("</div>", unsafe_allow_html=True)

# TRENDING TAGS SECTION
st.markdown("### 🌟 Trending Tags: What's Hot Right Now")
tags = [
    "Eye Shadow", "Concealer", "Glossy Lipstick", "Makeup Brushes",
    "Lip Liner", "Skincare Routine", "Foundation", "Pink Blusher",
    "Peach Blusher", "Bronzer", "Mascara", "Matte Lipstick",
    "Eyebrow Pencil", "Red Lipstick", "Setting Powder"
]
cols = st.columns(5)  # 5-column layout for the grid
for idx, tag in enumerate(tags):
    with cols[idx % 5]:  # Place each tag in the appropriate column
        st.markdown(f"<div class='tag'>{tag}</div>", unsafe_allow_html=True)

# VIDEO ANALYSIS SECTION
st.markdown("### 🎥 Discover Tools & Trends")
videos = ["https://www.youtube.com/embed/k7XG0zPLF5I", "https://www.youtube.com/embed/3eXT60rbBVk"]
cols = st.columns(2)  # Videos side by side
for idx, video in enumerate(videos):
    with cols[idx]:
        st.markdown(
            f"<iframe width='100%' height='300' src='{video}' frameborder='0' allowfullscreen></iframe>",
            unsafe_allow_html=True,
        )
