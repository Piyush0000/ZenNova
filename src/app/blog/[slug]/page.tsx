/* eslint-disable */
import React from "react";
import { notFound } from "next/navigation";

const BLOG_ARTICLES: Record<string, {
  title: string;
  date: string;
  image: string;
  category: string;
  author: string;
  content: string[];
}> = {
  "the-real-stories-of-crushing-fatigue-with-zennova-pure-himalayan-shilajit": {
    title: "The Real Stories of Crushing Fatigue with Zennova Pure Himalayan Shilajit",
    date: "May 21, 2026",
    image: "/storage/zennova-blog-shilajit.png",
    category: "Vitality",
    author: "ZenNova Health Team",
    content: [
      "We have all been there. It is 3:00 PM, you are staring at your laptop screen, and your brain feels like lead. You reach for your third cup of coffee, but deep down, you know it is just a temporary band-aid. The jitters are coming, and so is the crash.",
      "Chronic fatigue is one of the most common issues faced by modern professionals. Between long working hours, screen exposure, environmental toxins, and daily stress, our body's mitochondria—the cellular powerhouses—are simply overwhelmed.",
      "Enter Zennova Pure Himalayan Shilajit. Sourced from pristine altitudes exceeding 16,000 feet in the Himalayan ranges, this ancient resin is nature's answer to modern burnout. It is rich in Fulvic Acid, which acts as a powerful cellular transporter, carrying active trace minerals directly into your cells.",
      "Unlike caffeine, which artificially stimulates the central nervous system, Shilajit works at the mitochondrial level. It helps synthesize Adenosine Triphosphate (ATP), the primary energy currency of the human body. This means you experience a clean, sustained rise in energy without the jitters, anxiety, or sleeplessness associated with stimulants.",
      "Thousands of our customers have reported a remarkable difference within just two to three weeks of consistent daily usage. They describe a lifting of 'brain fog', improved physical endurance during workouts, and a steady stream of energy that lasts well into the evening."
    ]
  },
  "burn-fat-smarter-feel-stronger-every-day": {
    title: "Burn Fat Smarter, Feel Stronger Every Day",
    date: "May 21, 2026",
    image: "/storage/zennova-blog-fat-burner.png",
    category: "Weight Loss",
    author: "ZenNova Fitness Team",
    content: [
      "Are you struggling with stubborn belly fat, low energy levels, or uncontrollable cravings? You’re not alone. Thousands of people work out regularly and eat clean, yet fail to see the scale budge. The missing key often lies in metabolic efficiency.",
      "Traditional weight management approaches rely strictly on caloric deficits, which can sometimes slow down your basal metabolic rate (BMR) as your body tries to conserve energy. To burn fat smarter, you need to support your body's natural thermogenic process.",
      "Thermogenesis is the production of heat in the human body. By raising thermogenic activity, your body burns more calories as heat energy, even while at rest. Zennova Fat Burne is formulated with powerful natural thermogenic agents that help raise this baseline safely.",
      "Combined with a balanced diet and regular physical activity, a thermogenic formula can help target stubborn fat deposits, mobilize fatty acids to be used as fuel, and provide a clean energy boost to power through intense training sessions.",
      "Furthermore, one of the biggest hurdles in any fitness journey is managing cravings. Our thermogenic capsules contain elements that support blood sugar balance and satiety, helping you avoid mid-day snacking and stay on track with your nutritional goals."
    ]
  },
  "the-sleep-that-actually-makes-you-glow-why-zennova-sleepglow-is-the-transformation-youve-been-praying-for": {
    title: "Why Zennova SLEEPGlow Is the Transformation You've Been Praying For",
    date: "May 21, 2026",
    image: "/storage/zennova-blog-sleepglow.png",
    category: "Sleep & Beauty",
    author: "ZenNova Wellness Team",
    content: [
      "What if I told you there’s a missing piece to your wellness puzzle that doesn't involve a prescription pad? Deep, restorative sleep is the ultimate biological beauty secret and longevity therapy, yet it is often the first thing we sacrifice.",
      "During deep REM and non-REM sleep cycles, your body undergoes critical cellular repair. Growth hormone is released, micro-tears in muscles are healed, and the glymphatic system clears metabolic waste from the brain. Without sufficient sleep, skin loses its luster, cortisol spikes, and weight management becomes an uphill battle.",
      "Zennova SLEEPGlow is a natural sleep aid carefully formulated to help you transition into deep, restful sleep without the grogginess associated with synthetic sleep medication.",
      "By blending calming natural adaptogens and herbal extracts, SLEEPGlow helps soothe racing thoughts, lowers stress hormones before bed, and supports your natural circadian rhythm. This allows you to fall asleep faster and stay in the restorative stages of sleep longer.",
      "Waking up fully refreshed is a game changer. When your body recovers fully overnight, you wake up with a natural glow, sustained energy, and a resilient immune system ready to tackle the day ahead."
    ]
  }
};

export default async function BlogDetails({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const article = BLOG_ARTICLES[slug];

  if (!article) {
    notFound();
  }

  return (
    <main>
      {/* Breadcrumb */}
      <section className="breadcrumb__area pt-80 pb-80" style={{ backgroundColor: "#000", borderBottom: "1px solid #111" }}>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content text-center">
                <h2 className="breadcrumb__title text-white">{article.title}</h2>
                <div className="breadcrumb__list text-white">
                  <span><a href="/" className="text-white">Home</a></span>
                  <span className="dvdr">/</span>
                  <span><a href="/blog" className="text-white">Blog</a></span>
                  <span className="dvdr">/</span>
                  <span className="text-white-50">Article</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="tp-postbox-area pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-10">
              <div className="tp-postbox-wrapper">
                <article className="tp-postbox-item">
                  <div className="tp-postbox-thumb mb-40 rounded overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-100" style={{ maxHeight: "500px", objectFit: "cover" }} />
                  </div>
                  <div className="tp-postbox-details-content text-white">
                    <div className="tp-postbox-meta text-white-50 mb-20 d-flex gap-4">
                      <span>📅 {article.date}</span>
                      <span>✍️ By {article.author}</span>
                      <span className="text-warning">🏷️ {article.category}</span>
                    </div>
                    <h2 className="tp-postbox-title text-white mb-30" style={{ fontSize: "32px", fontWeight: "bold" }}>{article.title}</h2>
                    <div className="tp-postbox-text text-white-50" style={{ fontSize: "16px", lineHeight: "1.8" }}>
                      {article.content.map((p, idx) => (
                        <p key={idx} className="mb-25">{p}</p>
                      ))}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
