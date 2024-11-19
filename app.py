import streamlit as st
import random

# Set Page Configuration
st.set_page_config(page_title="RippleXp - Discover Trends", layout="centered")

# Function to generate random trending tags
def generate_trending_tags(categories, count=20):
    tags = []
    for _ in range(count):
        category = random.choice(categories)
        tags.append(category)
    return tags

# Categories and Colors for Buttons
categories = ["Makeup", "Haircare", "Beauty Hacks", "Skincare", "DIY Tutorials", "Trending Looks"]
button_colors = [
    "#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1",
    "#F7786B", "#034F84", "#98DDDE", "#B565A7", "#009B77"
]

# Custom Styling
st.markdown("""
    <style>
    body {
        font-family: 'Arial', sans-serif;
        background-color: #FAFAFA;
    }
    .header-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: bold;
        color: #333333;
    }
    .sub-title {
        text-align: center;
        font-size: 1.2rem;
        color: #666666;
        margin-top: -10px;
        margin-bottom: 20px;
    }
    .input-container {
        margin: 20px auto;
        text-align: center;
        width: 70%;
    }
    .trending-tags-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr); /* Create a 5-column grid */
        gap: 15px;
        justify-items: center;
        margin: 20px auto;
    }
    .tag-button {
        display: inline-block;
        padding: 10px 20px;
        color: white;
        font-weight: bold;
        border-radius: 50px; /* Fully rounded for pill shape */
        text-align: center;
        font-size: 1rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .tag-button:hover {
        transform: scale(1.1);
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }
    </style>
""", unsafe_allow_html=True)

# Header
st.markdown("<div class='header-title'>Discover Trends. Boost Video Reach.</div>", unsafe_allow_html=True)
st.markdown("<div class='sub-title'>Discover what is being said on YouTube right now!</div>", unsafe_allow_html=True)

# YouTube Input Section
st.markdown("<div class='input-container'>", unsafe_allow_html=True)
input_option = st.radio("Select an input type:", ["Paste YouTube Link", "Upload Video File"])
if input_option == "Paste YouTube Link":
    st.text_input("Paste your YouTube link here:")
else:
    st.file_uploader("Upload your video file here:", type=["mp4", "mov"])
st.button("Get Started Free")
st.markdown("</div>", unsafe_allow_html=True)

# Trending Tags Section
st.write("### Trending Tags: Discover What's Popular")
st.markdown("<div class='trending-tags-grid'>", unsafe_allow_html=True)
tags = generate_trending_tags(categories, count=20)  # Display 20 tags for a 5x4 grid
for i, tag in enumerate(tags):
    color = button_colors[i % len(button_colors)]  # Cycle through colors
    st.markdown(
        f"""
        <div class="tag-button" style="background-color: {color};">{tag}</div>
        """, unsafe_allow_html=True
    )
st.markdown("</div>", unsafe_allow_html=True)
