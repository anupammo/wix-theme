import wixLocation from 'wix-location';
import { sendContactForm } from 'backend/email-service';

$w.onReady(() => {
  setupNavigationLinks();
  setupNewsletterForm();
  setupSocialIcons();
});

function setupNavigationLinks() {
  const links = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
    { label: "Privacy Policy", url: "/privacy-policy" }
  ];

  $w("#footerRepeater").data = links;

  $w("#footerRepeater").onItemReady(($item, itemData) => {
    $item("#footerLink").label = itemData.label;
    $item("#footerLink").link = itemData.url;
  });
}

function setupNewsletterForm() {
  $w("#newsletterForm").onSubmit(() => {
    const email = $w("#newsletterInput").value;

    if (!email.includes("@")) {
      $w("#newsletterError").show();
      return;
    }

    // Simulate backend call or store in dataset
    console.log("Subscribed:", email);
    $w("#newsletterSuccess").show();
    $w("#newsletterForm").reset();
  });
}

function setupSocialIcons() {
  const socials = [
    { icon: "facebook", url: "https://facebook.com/yourpage" },
    { icon: "instagram", url: "https://instagram.com/yourpage" },
    { icon: "linkedin", url: "https://linkedin.com/in/yourprofile" },
    { icon: "youtube", url: "https://youtube.com/yourchannel" }
  ];

  $w("#socialRepeater").data = socials;

  $w("#socialRepeater").onItemReady(($item, itemData) => {
    $item("#socialIcon").src = `/assets/icons/${itemData.icon}.svg`;
    $item("#socialIcon").onClick(() => {
      wixLocation.to(itemData.url);
    });
  });
}