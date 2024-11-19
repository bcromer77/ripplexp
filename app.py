import streamlit as st
from pytube import YouTube  # For fetching metadata from YouTube links

# Set Page Configuration
st.set_page_config(page_title="RippleXp - Keyword Optimizer", layout="centered")

# Custom CSS for styling
st.markdown("""
    <style>
    body {
        font-family: 'Arial', sans-serif;
        background-color: #f4f4f4;
    }
    .main-container {
        text-align: center;
        max-width: 700px;
        margin: auto;
        background: #fff;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
        color: #333;
        font-size: 2.5rem;
        margin-bottom: 20px;
    }
    .input-container {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .get-started {
        background-color: #FF0000;
        color: white;
        border: none;
        padding: 15px 20px;
        font-size: 1.1rem;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s;
    }
    .get-started:hover {
        background-color: #cc0000;
    }
    .output-box {
        margin-top: 30px;
        padding: 20px;
        background: #f9f9f9;
        border-radius: 10px;
        text-align: left;
        font-size: 1rem;
        color: #444;
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    }
    .footer {
        margin-top: 30px;
        font-size: 0.9rem;
        color: #999;
    }
    </style>
""", unsafe_allow_html=True)

# Main Content
st.markdown("<div class='main-container'>", unsafe_allow_html=True)
st.title("RippleXp Keyword Optimizer")
st.write("### Get the right eyes on your videos, in seconds")

# Input Area
st.markdown("<div class='input-container'>", unsafe_allow_html=True)
option = st.radio("Select an input type:", ("Paste YouTube Link", "Upload Video File"))

def generate_keywords(title, description):
    # Placeholder logic for generating keywords
    keywords = set(title.split() + description.split())
    keywords = {word.lower() for word in keywords if len(word) > 3}  # Filter out short words
    return sorted(keywords)

if option == "Paste YouTube Link":
    video_link = st.text_input("Paste your YouTube link here:")
    if st.button("Get Started Free", key="link_button"):
        if video_link:
            try:
                # Fetch metadata using pytube
                yt = YouTube(video_link)
                title = yt.title
                description = yt.description

                # Generate keywords
                keywords = generate_keywords(title, description)

                # Display results
                st.markdown(f"<div class='output-box'>", unsafe_allow_html=True)
                st.write(f"**Title:** {title}")
                st.write(f"**Description:** {description[:150]}...")  # Show first 150 characters
                st.write("### Suggested Keywords:")
                for keyword in keywords:
                    st.write(f"- {keyword}")
                st.markdown("</div>", unsafe_allow_html=True)

            except Exception as e:
                st.error(f"Error processing the link: {e}")
        else:
            st.warning("Please paste a valid YouTube link.")
else:
    uploaded_file = st.file_uploader("Upload your video file here:", type=["mp4", "mov"])
    if st.button("Get Started Free", key="upload_button"):
        if uploaded_file:
            # Placeholder logic for uploaded videos
            st.markdown(f"<div class='output-box'>", unsafe_allow_html=True)
            st.write("**Uploaded File Keywords:**")
            st.write("1. DIY nail care")
            st.write("2. top nail polish brands")
            st.write("3. affordable nail art")
            st.markdown("</div>", unsafe_allow_html=True)
        else:
            st.warning("Please upload a valid video file.")

st.markdown("</div>", unsafe_allow_html=True)

# Footer
st.markdown("<div class='footer'>Powered by RippleXp | Optimizing content for creators</div>", unsafe_allow_html=True)
