// Logo click redirects to homepage
$w.onReady(() => {
  $w("#siteLogo").onClick(() => {
    wixLocation.to("/");
  });
});