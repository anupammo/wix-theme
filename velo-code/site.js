import wixLocation from 'wix-location';

$w.onReady(() => {
  setupScrollToTop();
  setDynamicYear();
});

function setupScrollToTop() {
  $w("#scrollTop").onClick(() => {
    $w("#pageTop").scrollTo();
  });
}

function setDynamicYear() {
  const year = new Date().getFullYear();
  $w("#copyrightYear").text = `${year}`;
}