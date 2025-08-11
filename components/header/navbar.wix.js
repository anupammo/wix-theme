// Sticky nav, active link highlights component for Wix header
$w.onReady(() => {
  $w("#menuToggle").onClick(() => {
    $w("#mobileMenu").toggle();
  });
});