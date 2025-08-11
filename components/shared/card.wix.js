// Feature card reveal animation
$w.onReady(() => {
  $w("#featureCard").onViewportEnter(() => {
    $w("#featureCard").show("fade", { duration: 600 });
  });
});