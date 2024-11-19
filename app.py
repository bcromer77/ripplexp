import streamlit as st

# PAGE CONFIGURATION
st.set_page_config(page_title="RippleXp: Your Creator Toolkit", layout="wide")

# HEADER SECTION
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
        transition: all 0.3s ease;
    }
    .cta-button:hover {
        background: linear-gradient(90deg, #fcaeae, #ff89a0);
        transform: scale(1.05);
    }
    </style>
    """,
    unsafe_allow_html=True,
)

st.markdown("<div class='headline'>RippleXp: Your Creator Toolkit</div>", unsafe_allow_html=True)
st.markdown(
    "<div class='subheading'>Effortlessly find trends, optimize your videos, and connect with your audience like never before.</div>",
    unsafe_allow_html=True,
)

# TRENDING TAGS SECTION
st.markdown("### 🌟 Trending Tags: What's Hot Right Now")

# GRID OF TRENDING TAGS
tags = [
    "Eye Shadow", "Concealer", "Glossy Lipstick", "Makeup Brushes",
    "Lip Liner", "Skincare Routine", "Foundation", "Pink Blusher",
    "Peach Blusher", "Bronzer", "Mascara", "Matte Lipstick",
    "Eyebrow Pencil", "Red Lipstick", "Setting Powder"
]
cols = st.columns(4)
for idx, tag in enumerate(tags):
    with cols[idx % 4]:
        st.markdown(
            f"<div style='text-align:center; background:linear-gradient(90deg, #ffdee9, #b5fffc); "
            f"border-radius:12px; padding:10px; margin:5px 0; color:#444; font-weight:bold;'>"
            f"{tag}</div>",
            unsafe_allow_html=True,
        )

# VIDEO ANALYSIS SECTION
st.markdown("### 🎥 Discover Tools & Trends")
videos = ["https://www.youtube.com/embed/k7XG0zPLF5I", "https://www.youtube.com/embed/3eXT60rbBVk"]
cols = st.columns(2)
for idx, video in enumerate(videos):
    with cols[idx]:
        st.markdown(
            f"<iframe width='100%' height='200' src='{video}' frameborder='0' allowfullscreen></iframe>",
            unsafe_allow_html=True,
        )

# CALL TO ACTION
st.markdown("<div style='text-align:center; margin-top:20px;'>", unsafe_allow_html=True)
st.markdown("<button class='cta-button'>Get Started Free</button>", unsafe_allow_html=True)
st.markdown("</div>", unsafe_allow_html=True)
