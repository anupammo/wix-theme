// Hero CTA scrolls to next section
$w.onReady(() => {
  $w("#ctaButton").onClick(() => {
    $w("#servicesSection").scrollTo();
  });

  // Animate scroll indicator
  $w("#scrollIndicator").onViewportEnter(() => {
    $w("#scrollIndicator").show("fade", { duration: 500 });
  });
});