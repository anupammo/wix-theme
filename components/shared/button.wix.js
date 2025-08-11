// Reusable button component
// Reusable button hover effect
$w.onReady(() => {
  $w("#primaryButton").onMouseIn(() => {
    $w("#primaryButton").style.backgroundColor = "#FF6F00";
  });

  $w("#primaryButton").onMouseOut(() => {
    $w("#primaryButton").style.backgroundColor = "#1A73E8";
  });
});