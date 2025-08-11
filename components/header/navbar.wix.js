// Sticky navbar and active link highlight
$w.onReady(() => {
  const currentPage = wixLocation.path[0];
  $w("#navLinks").forEach(link => {
    if (link.link.includes(currentPage)) {
      link.style.color = "#1A73E8"; // Active color
    }
  });

  // Mobile menu toggle
  $w("#menuToggle").onClick(() => {
    $w("#mobileMenu").expand();
  });

  $w("#closeMenu").onClick(() => {
    $w("#mobileMenu").collapse();
  });
});