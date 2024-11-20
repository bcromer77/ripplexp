import streamlit as st

# PAGE CONFIGURATION
st.set_page_config(page_title="You've made your video, now grow your audience", layout="wide")

# GLOBAL STYLES
st.markdown(
    """
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600&display=swap');
    
    body {
        background: linear-gradient(180deg, #fff8f8, #ffeaea);
        font-family: 'Inter', sans-serif;
    }
    .logo {
        font-family: 'Playfair Display', serif;
        font-size: 3rem;
        font-weight: bold;
        color: #ff89a0;
        margin: 0;
        padding: 0;
    }
    .headline {
        font-size: 3.5rem;
        font-weight: bold;
        text-align: center;
        background: linear-gradient(90deg, #ff89a0, #ff648c);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: glow 2s infinite alternate;
    }
    .subheading {
        font-size: 1.5rem;
        color: #555555;
        text-align: center;
        margin-bottom: 40px;
    }
    .cta-button {
        background: linear-gradient(90deg, #ff89a0, #ff648c);
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        border: none;
        color: white;
        font-size: 1.2rem;
        padding: 14px 30px;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.4s ease;
    }
    .cta-button:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
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
    .top-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #fff;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
    @keyframes glow {
        from { text-shadow: 0 0 10px #ff89a0; }
        to { text-shadow: 0 0 20px #ff648c; }
    }
    .coming-soon {
        text-align: center;
        font-size: 1.2rem;
        color: #ff648c;
        font-weight: bold;
        margin: 20px 0;
    }
    </style>
    """,
    unsafe_allow_html=True,
)

# TOP LOGO BAR
st.markdown(
    """
    <div class="top-bar">
        <div class="logo">Epic Xc</div>
    </div>
    """,
    unsafe_allow_html=True,
)

# HEADER SECTION
st.markdown("<div class='headline'>You've made your video, now grow your audience</div>", unsafe_allow_html=True)
st.markdown(
    "<div class='subheading'>Discover trending tags, audience insights, and tools to amplify your reach.</div>",
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

# "Find Your Audience" Button
st.markdown("<div style='text-align:center; margin-top:20px;'>", unsafe_allow_html=True)
if st.button("Find your Audience", key="find_audience"):
    st.success("Audience analysis is coming soon!")

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

# PLACEHOLDER FOR RIPPLEXN INSIGHTS
st.markdown("<div class='coming-soon'>🚀 RippleXn Insights Coming Soon! Stay tuned for real-time audience analytics.</div>", unsafe_allow_html=True)

# Final Call to Action
st.markdown("<div style='text-align:center; margin-top:30px;'>", unsafe_allow_html=True)
st.markdown("<button class='cta-button'>Get Started Free</button>", unsafe_allow_html=True)
st.markdown("</div>", unsafe_allow_html=True)

