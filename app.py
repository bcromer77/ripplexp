import streamlit as st

# PAGE CONFIGURATION
st.set_page_config(page_title="EpicXc: Amplify Your Audience", layout="wide")

# GLOBAL STYLES
st.markdown(
    """
    <style>
    body {
        background: linear-gradient(180deg, #fff8f8 0%, #f5f5f5 100%);
        font-family: 'Inter', sans-serif;
    }
    .headline {
        font-size: 3.5rem;
        font-weight: 700;
        color: #ff89a0;
        text-align: center;
        margin-top: 30px;
    }
    .subheading {
        font-size: 1.5rem;
        color: #444444;
        text-align: center;
        margin-bottom: 40px;
    }
    .cta-button {
        background: rgba(255, 137, 160, 0.9);
        border: none;
        color: white;
        font-size: 1.2rem;
        padding: 12px 25px;
        border-radius: 20px;
        cursor: pointer;
        text-align: center;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .cta-button:hover {
        background: rgba(252, 174, 174, 0.9);
        transform: scale(1.05);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
    .tag {
        text-align: center;
        background: linear-gradient(90deg, #ffdee9, #b5fffc);
        border-radius: 20px;
        padding: 12px;
        margin: 8px;
        color: #444;
        font-weight: bold;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
    }
    .tag:hover {
        background: linear-gradient(90deg, #ff89a0, #b5fffc);
        color: white;
        transform: scale(1.1);
    }
    iframe {
        border-radius: 10px;
        margin: 10px 0;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    footer {
        text-align: center;
        padding: 20px;
        margin-top: 50px;
        background-color: #f5f5f5;
        border-top: 1px solid #ddd;
    }
    footer a {
        text-decoration: none;
        color: #444;
        margin: 0 10px;
    }
    footer a:hover {
        color: #ff89a0;
    }
    </style>
    """,
    unsafe_allow_html=True,
)

# HEADER SECTION
st.markdown("<div class='headline'>You’ve made your video, now grow your audience.</div>", unsafe_allow_html=True)
st.markdown(
    "<div class='subheading'>Discover trending tags, audience insights, and tools to amplify your reach.</div>",
    unsafe_allow_html=True,
)

# INPUT SECTION
st.markdown("### 📹 Submit Your Video")
youtube_link = st.text_input(
    "Insert your YouTube link here:",
    placeholder="e.g., https://www.youtube.com/watch?v=example123",
    help="Paste your video link here to analyze content.",
)
uploaded_file = st.file_uploader("Or upload your video file", type=["mp4", "mov", "avi"])
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
cols = st.columns(5)
for idx, tag in enumerate(tags):
    with cols[idx % 5]:
        st.markdown(f"<div class='tag'>{tag}</div>", unsafe_allow_html=True)

# VIDEO SECTION
st.markdown("### 🎥 Discover Tools & Trends")
videos = ["https://www.youtube.com/embed/k7XG0zPLF5I", "https://www.youtube.com/embed/3eXT60rbBVk"]
cols = st.columns(2)
for idx, video in enumerate(videos):
    with cols[idx]:
        st.markdown(
            f"<iframe width='100%' height='300' src='{video}' frameborder='0' allowfullscreen></iframe>",
            unsafe_allow_html=True,
        )

# FOOTER SECTION
st.markdown(
    """
    <footer>
        <p>© 2024 EpicXc | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
    </footer>
    """,
    unsafe_allow_html=True,
)
