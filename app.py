import streamlit as st
import random

# Set Page Configuration
st.set_page_config(page_title="RippleXp - Boost Video Visibility", layout="centered")

# Function to generate random trending tags
def generate_trending_tags(categories, count=10):
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
    .search-bar-container {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    }
    .trending-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 20px;
    }
    .tag-button {
        display: inline-block;
        margin: 10px 10px;
        padding: 10px 20px;
        color: white;
        font-weight: bold;
        border-radius: 25px;
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
st.markdown("<div class='header-title'>RippleXp Boost Video Visibility</div>", unsafe_allow_html=True)
st.markdown("<div class='sub-title'>Get the right eyes on your videos, in seconds</div>", unsafe_allow_html=True)

# Search Bar
st.markdown("<div class='search-bar-container'>", unsafe_allow_html=True)
search_query = st.text_input("Search Trending Tags:", value="", placeholder="Enter a keyword...")
st.markdown("</div>", unsafe_allow_html=True)

# Trending Tags Section
st.markdown("<div class='trending-tags'>", unsafe_allow_html=True)
tags = generate_trending_tags(categories, count=15)
for i, tag in enumerate(tags):
    color = button_colors[i % len(button_colors)]  # Cycle through colors
    st.markdown(
        f"""
        <div class="tag-button" style="background-color: {color};">{tag}</div>
        """, unsafe_allow_html=True
    )
st.markdown("</div>", unsafe_allow_html=True)

# Input Section
st.radio("Select an input type:", ["Paste YouTube Link", "Upload Video File"])
st.text_input("Paste your YouTube link here:")
st.button("Get Started Free")
