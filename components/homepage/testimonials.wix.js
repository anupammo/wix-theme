// Lazy-load testimonials carousel
$w.onReady(() => {
  $w("#testimonialRepeater").onItemReady(($item, itemData) => {
    $item("#avatar").src = itemData.avatar;
    $item("#quote").text = itemData.quote;
    $item("#name").text = itemData.name;
  });

  $w("#testimonialRepeater").data = [
    {
      avatar: "/assets/images/user1.webp",
      quote: "This theme transformed our brand presence!",
      name: "Priya S."
    },
    {
      avatar: "/assets/images/user2.webp",
      quote: "Fast, responsive, and beautifully designed.",
      name: "Rahul D."
    }
  ];
});