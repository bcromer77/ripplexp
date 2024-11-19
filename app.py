import streamlit as st
import random

# Set Page Configuration
st.set_page_config(page_title="RippleXp - Boost Your Reach", layout="wide")

# Define button categories and descriptions
categories = [
    "Matte Lipstick", "Glossy Lipstick", "Red Lipstick", "Peach Blusher", "Bronzer", "Pink Blusher",
    "Concealer", "Foundation", "Setting Powder", "Highlighter", "Eye Shadow", "Mascara", 
    "Eyebrow Pencil", "Eyeliner", "Lip Liner", "Makeup Brushes", "Skincare Routine", "Haircare Tips"
]
button_colors = [
    "#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1",
    "#F7786B", "#034F84", "#98DDDE", "#B565A7", "#009B77"
]

# Carousel Images
carousel_images = [
    "https://via.placeholder.com/300x150.png?text=Makeup+Carousel+1",
    "https://via.placeholder.com/300x150.png?text=Makeup+Carousel+2",
    "https://via.placeholder.com/300x150.png?text=Makeup+Carousel+3",
    "https://via.placeholder.com/300x150.png?text=Makeup+Carousel+4",
]

# Function to generate random tags
def generate_random_tags(categories, count=20):
    return random.sample(categories, count)

# Custom CSS for styling
st.markdown("""
    <style>
    /* Body Styling */
    body {
        font-family: 'Arial', sans-serif;
        background-color: #FDFDFD;
    }
    .header-title {
        text-align: center;
        font-size: 3rem;
        font-weight: bold;
        color: #333333;
        margin-top: 20px;
    }
    .sub-title {
        text-align: center;
        font-size: 1.5rem;
        color: #555555;
        margin-top: -15px;
        margin-bottom: 30px;
    }
    /* Carousel Styling */
    .carousel {
        display: flex;
        justify-content: center;
        overflow-x: auto;
        gap: 20px;
        scroll-behavior: smooth;
    }
    .carousel img {
        width: 300px;
        height: 150px;
        border-radius: 15px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s;
    }
    .carousel img:hover {
        transform: scale(1.1);
    }
    /* Trending Tags Grid */
    .trending-tags-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr); /* Create a 4-column grid */
        gap: 20px;
        justify-items: center;
        margin: 30px auto;
    }
    .tag-button {
        display: inline-block;
        padding: 12px 25px;
        color: white;
        font-weight: bold;
        border-radius: 50px;
        text-align: center;
        font-size: 1rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        background: linear-gradient(135deg, #FF6F61, #FFA07A); /* Subtle gradient */
        transition: transform 0.3s, box-shadow 0.3s;
    }
    .tag-button:hover {
        transform: scale(1.1);
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
    }
    /* Responsive Design */
    @media (max-width: 768px) {
        .trending-tags-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    </style>
""", unsafe_allow_html=True)

# Header
st.markdown("<div class='header-title'>RippleXp: Boost Your Reach</div>", unsafe_allow_html=True)
st.markdown("<div class='sub-title'>The ultimate tool for creators to elevate their video content and grow faster.</div>", unsafe_allow_html=True)

# Carousel Section
st.markdown("### Discover Tools & Trends")
st.markdown("<div class='carousel'>", unsafe_allow_html=True)
for image in carousel_images:
    st.markdown(f"<img src='{image}' alt='Carousel Image'>", unsafe_allow_html=True)
st.markdown("</div>", unsafe_allow_html=True)

# YouTube Input Section
st.markdown("### Get Started")
st.radio("Select an input type:", ["Paste YouTube Link", "Upload Video File"])
st.text_input("Paste your YouTube link here:")
st.button("Analyze Video")

# Trending Tags Section
st.write("### Trending Tags: What’s Hot Right Now")
st.markdown("<div class='trending-tags-grid'>", unsafe_allow_html=True)
tags = generate_random_tags(categories, count=16)  # Display 16 tags for a 4x4 grid
for i, tag in enumerate(tags):
    color = button_colors[i % len(button_colors)]  # Cycle through colors
    st.markdown(
        f"""
        <div class="tag-button" style="background-color: {color};">{tag}</div>
        """, unsafe_allow_html=True
    )
st.markdown("</div>", unsafe_allow_html=True)
