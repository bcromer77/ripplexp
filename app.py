import streamlit as st

# Page Config
st.set_page_config(
    page_title="RippleXp: Boost Your Reach",
    layout="wide",
)

# Header Section
st.markdown(
    """
    <h1 style='text-align: center;'>RippleXp: Boost Your Reach</h1>
    <p style='text-align: center; color: grey;'>The ultimate tool for creators to elevate their video content and grow faster.</p>
    """,
    unsafe_allow_html=True,
)

# Get Started Section
st.markdown(
    """
    <div style='background-color: #f8f8f8; padding: 20px; border-radius: 10px; margin-bottom: 30px;'>
        <h3 style='text-align: center;'>Get Started</h3>
        <p style='text-align: center; color: grey;'>Paste your YouTube link or upload a video file to get personalized tags and insights.</p>
    </div>
    """,
    unsafe_allow_html=True,
)

input_type = st.radio(
    "Select an input type:",
    ["Paste YouTube Link", "Upload Video File"],
    index=0,
)

if input_type == "Paste YouTube Link":
    youtube_link = st.text_input("Paste your YouTube link here:")
elif input_type == "Upload Video File":
    uploaded_file = st.file_uploader("Upload your video file:")

st.button("Get Started Free")

# Video Carousel
st.markdown(
    """
    <h3 style='text-align: center;'>Discover Tools & Trends</h3>
    <div style='display: flex; justify-content: center; gap: 20px;'>
        <iframe width="320" height="180" src="https://www.youtube.com/embed/videoseries?list=PLdawBtq9bt_DesiPerkins" 
        frameborder="0" allowfullscreen></iframe>
        <iframe width="320" height="180" src="https://www.youtube.com/embed/videoseries?list=PLdawBtq9bt_WayneGoss" 
        frameborder="0" allowfullscreen></iframe>
    </div>
    """,
    unsafe_allow_html=True,
)

# Trending Tags with Animation
st.markdown(
    """
    <h3 style='text-align: center;'>Trending Tags: What's Hot Right Now</h3>
    <div style='display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; justify-items: center;'>
        <div style="animation: pulse 2s infinite; background-color: #FFD1DC; padding: 10px 15px; border-radius: 25px;">Mascara</div>
        <div style="animation: pulse 2s infinite; background-color: #B4E197; padding: 10px 15px; border-radius: 25px;">Skincare Routine</div>
        <div style="animation: pulse 2s infinite; background-color: #95D7E0; padding: 10px 15px; border-radius: 25px;">Concealer</div>
        <div style="animation: pulse 2s infinite; background-color: #F7B267; padding: 10px 15px; border-radius: 25px;">Eyeliner</div>
        <div style="animation: pulse 2s infinite; background-color: #D4A5A5; padding: 10px 15px; border-radius: 25px;">Makeup Brushes</div>
        <div style="animation: pulse 2s infinite; background-color: #94DAFF; padding: 10px 15px; border-radius: 25px;">Haircare Tips</div>
        <div style="animation: pulse 2s infinite; background-color: #FFC1A1; padding: 10px 15px; border-radius: 25px;">Bronzer</div>
        <div style="animation: pulse 2s infinite; background-color: #9AD1D4; padding: 10px 15px; border-radius: 25px;">Red Lipstick</div>
    </div>
    
    <style>
    @keyframes pulse {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.1); opacity: 0.8; }
        100% { transform: scale(1); opacity: 1; }
    }
    </style>
    """,
    unsafe_allow_html=True,
)
