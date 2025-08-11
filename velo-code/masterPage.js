$w.onReady(() => {
  setupStickyHeader();
  highlightActiveNav();
});

function setupStickyHeader() {
  $w("#header").onViewportLeave(() => {
    $w("#header").style.position = "fixed";
    $w("#header").style.top = "0";
  });

  $w("#header").onViewportEnter(() => {
    $w("#header").style.position = "relative";
  });
}

function highlightActiveNav() {
  const currentPath = wixLocation.path[0];
  $w("#navRepeater").forEachItem(($item, itemData) => {
    if (itemData.link.includes(currentPath)) {
      $item("#navLink").style.color = "#FF6F00";
    }
  });
}