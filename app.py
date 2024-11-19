st.markdown("""
    <style>
    .trending-tags-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr); /* Create a 5-column grid */
        gap: 20px;
        justify-items: center;
        margin: 20px auto;
    }
    .tag-button {
        display: inline-block;
        padding: 12px 20px;
        color: white;
        font-weight: bold;
        border-radius: 50px;
        text-align: center;
        font-size: 1rem;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        background: linear-gradient(135deg, #FF6F61, #FFA07A); /* Subtle gradient */
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .tag-button:hover {
        transform: scale(1.1);
        box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.3);
        background: linear-gradient(135deg, #FF4500, #FF6347); /* Brighter on hover */
    }
    @keyframes pulse {
        0% { box-shadow: 0 0 10px rgba(255, 99, 71, 0.5); }
        50% { box-shadow: 0 0 20px rgba(255, 99, 71, 0.7); }
        100% { box-shadow: 0 0 10px rgba(255, 99, 71, 0.5); }
    }
    .pulse-button {
        animation: pulse 2s infinite;
    }
    </style>
""", unsafe_allow_html=True)

# Trending Tags Section
st.write("### Trending Tags: Discover What's Popular")
st.markdown("<div class='trending-tags-grid'>", unsafe_allow_html=True)

# Add Top Tags with Pulse Animation
top_tags = ["Red Lipstick", "Foundation", "Skincare Routine"]
for tag in top_tags:
    st.markdown(
        f"""
        <div class="tag-button pulse-button">{tag}</div>
        """, unsafe_allow_html=True
    )

# Add Other Tags
tags = generate_random_tags(categories, count=12)
for i, tag in enumerate(tags):
    st.markdown(
        f"""
        <div class="tag-button">{tag}</div>
        """, unsafe_allow_html=True
    )

st.markdown("</div>", unsafe_allow_html=True)
