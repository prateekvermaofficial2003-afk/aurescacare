/**
 * Long-form content for individual service pages.
 *
 * Why this file and not one hand-written page per service: `/services/[slug]`
 * renders every entry here through a single template, so a layout or SEO fix
 * lands on all of them at once and none of them can drift. Adding a service is
 * adding one object below — no new page, no copied markup.
 *
 * `slug` must match a `serviceCategories` slug in `site.ts`, which is what
 * links the treatment menu on the home page to the page for it. A category
 * with no entry here simply has no detail page, and nothing links to one.
 *
 * If this ever moves behind a CMS or an API, this module is the only thing
 * that has to change shape — the template consumes `ServiceDetail`, not JSON.
 */

import type { Faq } from "./site";

/** One row of the "areas we treat" table. */
export type PriceRow = {
  area: string;
  /** Typical course for this area — a range, never a promise. */
  sessions: string;
  /**
   * Starting price, formatted for display (e.g. "₹1,500"). Left undefined
   * until the clinic confirms the number; the table shows "On request" and
   * points at the consultation instead of inventing a figure.
   */
  priceFrom?: string;
};

export type PriceGroup = { title: string; rows: PriceRow[] };

/** A labelled fact for the strip under the hero. */
export type Spec = { icon: string; label: string; value: string };

export type Step = { title: string; desc: string };

export type Point = { title: string; desc: string };

/**
 * A service page carries a full reference FAQ rather than the short
 * objection-handling set the home page uses, so the questions are grouped.
 * `id` is the anchor the jump links target — keep it stable, it can be linked
 * to from outside.
 */
export type FaqGroup = { id: string; title: string; items: Faq[] };

export type ServiceDetail = {
  /** Must match a `serviceCategories` slug in `site.ts`. */
  slug: string;
  name: string;
  eyebrow: string;
  /** Hero sub-headline — one line, sets the promise. */
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  specs: Spec[];
  science: { title: string; body: string[] };
  visit: { title: string; intro: string; steps: Step[] };
  areas: {
    title: string;
    /**
     * Small-caps label over the heading, and the first column's header. Both
     * default to the wording a list of body areas wants; a service whose menu
     * is a list of treatments rather than areas overrides them.
     */
    eyebrow?: string;
    columnLabel?: string;
    intro: string;
    note: string;
    groups: PriceGroup[];
  };
  technology: { title: string; intro: string; points: Point[] };
  suitability: {
    title: string;
    goodTitle: string;
    good: string[];
    waitTitle: string;
    wait: string[];
  };
  care: {
    title: string;
    intro: string;
    beforeTitle: string;
    before: string[];
    afterTitle: string;
    after: string[];
  };
  results: { title: string; lead: string; body: string[]; points: Point[] };
  faqGroups: FaqGroup[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "laser-hair-reduction",
    name: "Laser Hair Reduction",
    eyebrow: "Skin & Body",
    headline: "Smooth skin, session by session, at the wavelength your skin can take.",
    intro:
      "Medically supervised laser hair reduction for Indian and deeper skin tones. Comfortable, effectively downtime-free, and scheduled around your hair's own growth cycle so that every session lands when it can actually do something.",
    image: "/images/hero-laser.webp",
    imageAlt: "Laser hair reduction being performed at Auresca Care",
    metaTitle: "Laser Hair Reduction in Gurugram — Auresca Care",
    metaDescription:
      "Dermatology-led laser hair reduction in Gurugram for face and body. Wavelength matched to your skin type, cooled handpiece, no downtime. Free first consultation.",

    specs: [
      { icon: "laser", label: "Typical course", value: "6–8 sessions" },
      { icon: "clock", label: "Session length", value: "15–90 min by area" },
      { icon: "check", label: "Downtime", value: "None, resume your day" },
      {
        icon: "sparkle",
        label: "Spacing",
        value: "4–6 wks face · 6–8 wks body",
      },
      { icon: "shield", label: "Skin tones", value: "All, including deeper" },
      { icon: "stethoscope", label: "Supervision", value: "Medically led" },
    ],

    science: {
      title: "How laser hair reduction actually works",
      body: [
        "The laser emits a wavelength of light that the pigment in your hair absorbs far more readily than the surrounding skin. That light becomes heat, the heat travels down the hair shaft, and the follicle that produces it is disabled. This is selective photothermolysis: the target is the pigment, which is why dark, coarse hair responds best and why grey, white and very fine blonde hair largely does not.",
        "The catch, and the reason a single session can never finish the job, is that it only works on follicles in their active growth phase, called anagen. At any given moment roughly 20–30% of the hair in an area is in that phase; the rest is resting or shedding, and simply isn't attached to anything the laser can reach.",
        "So a course isn't upselling, it's arithmetic. Each session catches a different cohort of follicles as they rotate into growth, which is also why the gap between sessions matters as much as the sessions themselves. Come too early and you treat skin with nothing in anagen; leave it too long and you miss the window entirely.",
      ],
    },

    visit: {
      title: "What a session looks like",
      intro:
        "Nothing about the appointment should be a surprise. This is the whole sequence, from the first visit onward.",
      steps: [
        {
          title: "Consultation & patch test",
          desc: "We assess your skin type, hair type and medical history, and talk through what is realistic for your area. A small test patch confirms how your skin responds before any full session is booked.",
        },
        {
          title: "Prep & marking",
          desc: "The area is cleansed and shaved down if needed, then mapped into a treatment grid, so no patch is missed and none is passed over twice.",
        },
        {
          title: "Cooling & the laser pass",
          desc: "Contact cooling or chilled gel protects the surface of the skin while the handpiece works across the grid. Most people describe each pulse as a warm snap; numbing cream is available for sensitive areas.",
        },
        {
          title: "Soothing & aftercare",
          desc: "A calming gel and broad-spectrum sunscreen go on before you leave, along with written aftercare and your next appointment already booked at the right interval.",
        },
      ],
    },

    areas: {
      title: "Areas we treat",
      intro:
        "From a single upper lip to full body, for women and men. Session counts are the typical range for that area. Your own plan is confirmed after your consultation and patch test.",
      note: "Pricing depends on the area, your hair density and the plan agreed at consultation. Your first consultation is complimentary, and you will have the full cost in writing before anything is booked.",
      groups: [
        {
          title: "Face & neck",
          rows: [
            { area: "Upper Lip", sessions: "6–10" },
            { area: "Chin", sessions: "6–10" },
            { area: "Full Face", sessions: "6–10" },
            { area: "Lower Face", sessions: "6–10" },
            { area: "Side Locks", sessions: "6–8" },
            { area: "Earlobes", sessions: "4–6" },
            { area: "Beard Shaping", sessions: "6–8" },
          ],
        },
        {
          title: "Body",
          rows: [
            { area: "Full Body", sessions: "6–8" },
            { area: "Full Arms", sessions: "6–8" },
            { area: "Full Legs", sessions: "6–8" },
            { area: "Underarms", sessions: "6–8" },
            { area: "Bikini", sessions: "6–8" },
            { area: "Glutes", sessions: "6–8" },
            { area: "Front", sessions: "6–8" },
            { area: "Half Front", sessions: "6–8" },
            { area: "Back", sessions: "6–8" },
            { area: "Half Back", sessions: "6–8" },
          ],
        },
      ],
    },

    technology: {
      title: "Why the wavelength matters",
      intro:
        "The single biggest safety factor in laser hair reduction on Indian skin is choosing a wavelength your epidermis can tolerate. Melanin in the skin competes with melanin in the hair for the same light, and on deeper skin tones, the wrong choice is what causes burns and pigmentation.",
      points: [
        {
          title: "810 nm diode",
          desc: "Strong melanin absorption with enough depth to reach the follicle. The workhorse for most skin types and for coarse, dense hair.",
        },
        {
          title: "1064 nm Nd:YAG",
          desc: "A longer wavelength, absorbed least by pigment in the surface layer of the skin. This is the safer option for the deepest skin tones and for skin that has seen recent sun.",
        },
        {
          title: "Cooling at the contact point",
          desc: "The epidermis is chilled through every pulse. Cooling is not a comfort feature. It is what keeps the heat in the follicle instead of the skin above it.",
        },
        {
          title: "Settings matched to you",
          desc: "Fluence and pulse width are set from your skin type and your patch-test response, not from a standing preset. Lower energy over a longer pulse is often the right answer on deeper skin.",
        },
      ],
    },

    suitability: {
      title: "Is it right for you?",
      goodTitle: "Usually a good fit",
      good: [
        "Dark, coarse hair on any skin tone: pigment is the target, so this responds best",
        "Deeper skin tones, treated on an appropriately long wavelength",
        "Recurring ingrown hairs, razor bumps or folliculitis from shaving and waxing",
        "Hormonally driven facial hair, as one part of a plan that also looks at the cause",
        "Men looking for beard shaping, neckline, chest or back work",
      ],
      waitTitle: "Wait, or talk to us first",
      wait: [
        "Pregnancy or breastfeeding: treatment is deferred as a precaution",
        "Oral isotretinoin taken within the past six months",
        "Active infection, cold sore, eczema flare or broken skin in the area",
        "A fresh tan or significant sun exposure in the past 2–4 weeks",
        "Photosensitising medication: bring your full list, including supplements",
        "Grey, white, red or very fine blonde hair, which holds too little pigment to respond",
        "Waxing, threading or plucking the area within the past 3–4 weeks",
      ],
    },

    care: {
      title: "Before & after your session",
      intro:
        "Most disappointing courses of laser are not a machine problem. They are a preparation problem. These two lists carry more of the result than people expect.",
      beforeTitle: "In the days before",
      before: [
        "Shave the area 12–24 hours ahead. Stubble at the surface is fine; hair above it is not.",
        "Do not wax, thread, pluck or epilate for 3–4 weeks beforehand. The laser needs the follicle still in place to work on.",
        "Avoid sun, tanning beds and self-tanner for 2–4 weeks. A tan changes how much light your skin absorbs.",
        "Pause retinoids, AHAs, BHAs and scrubs on the area for about a week.",
        "Arrive with clean skin: no deodorant, makeup, oil or lotion on the treatment area.",
        "Tell us about every medication and supplement you take, especially isotretinoin, antibiotics and anything photosensitising.",
      ],
      afterTitle: "For the days after",
      after: [
        "Mild redness and small raised bumps around each follicle are normal, and usually settle within a few hours to a day.",
        "Skip hot showers, steam, sauna and the gym for 24–48 hours while the skin calms.",
        "Broad-spectrum SPF 30+ every day on treated skin that sees light. This is the single most important step for pigment safety.",
        "Shave between sessions as often as you like, but no waxing, threading or plucking.",
        "Treated hair sheds over the next one to three weeks and can look like regrowth. It isn't. Let it fall out on its own.",
        "Keep the next appointment at the interval we set. The spacing is doing half the work.",
      ],
    },

    results: {
      title: "What results look like, honestly",
      lead: "Lasers are cleared for permanent hair reduction, not permanent hair removal. The distinction is not a technicality, and a clinic that blurs it is setting you up to be disappointed.",
      body: [
        "Permanent reduction means a lasting drop in the number of hairs that grow back, stable for longer than a full growth cycle. Over a properly spaced course of six to eight sessions, most people see roughly a 70–90% reduction in the hair in a treated area, and what remains tends to come back finer, slower and lighter than it was.",
        "Electrolysis remains the only method described as permanent hair removal, follicle by follicle. It is slow and best suited to small areas, which is why laser is the practical choice for anything larger than a few stray hairs.",
      ],
      points: [
        {
          title: "After 2–3 sessions",
          desc: "Visible thinning and a slower return between shaves. This is the point where most people first notice the difference.",
        },
        {
          title: "After the full course",
          desc: "The bulk of the reduction, with the remaining hair finer and lighter. How much depends on your hair colour, thickness and hormones.",
        },
        {
          title: "Maintenance",
          desc: "An occasional top-up once or twice a year holds the result. Hormonally driven facial hair generally needs a little more.",
        },
        {
          title: "What changes the outcome",
          desc: "Hormonal conditions such as PCOS, medication, and above all, keeping to the spacing between sessions.",
        },
      ],
    },

    faqGroups: [
      {
        id: "basics",
        title: "The basics",
        items: [
          {
            q: "What is laser hair reduction?",
            a: "It is a medical treatment that uses a focused beam of light to disable the follicles producing unwanted hair. Over a course of sessions the treated area is left with markedly less hair, growing back finer and slower, rather than clearing it for a few weeks the way shaving or waxing does.",
          },
          {
            q: "How does laser hair reduction work?",
            a: "The laser emits a wavelength that pigment in your hair absorbs far more readily than the surrounding skin. That light becomes heat, travels down the hair shaft and disables the follicle at its root. Only follicles in their active growth phase respond, which is why a course is needed to reach them all.",
          },
          {
            q: "Is laser hair reduction permanent?",
            a: "It gives permanent hair reduction rather than permanent removal. Most people see roughly a 70–90% lasting drop in hair over a full course, with what remains growing back finer and lighter. An occasional top-up holds the result. Electrolysis is the only method described as permanent removal.",
          },
        ],
      },
      {
        id: "sessions",
        title: "Sessions, schedule & cost",
        items: [
          {
            q: "How many laser hair reduction sessions will I need?",
            a: "Usually six to eight. Hormonally driven facial hair, chin and upper lip especially, can take eight to ten, sometimes with ongoing maintenance. Your own number depends on your hair colour and thickness, the area treated and how your skin responds, and is confirmed after your consultation and patch test.",
          },
          {
            q: "How frequently should laser hair reduction sessions be taken?",
            a: "Facial areas are spaced roughly four to six weeks apart, body areas six to eight. The gap is not arbitrary. It is timed to catch the next group of follicles as they enter their growth phase. Come too early and there is little to target; leave it too long and you miss the window.",
          },
          {
            q: "How long does one laser hair reduction session take?",
            a: "From about fifteen minutes for a small facial area such as the upper lip or chin, to around ninety minutes for full body. Underarms take roughly fifteen minutes, full arms or legs closer to forty-five. Allow extra time for your first visit, which includes the consultation and patch test.",
          },
          {
            q: "What happens if I stop laser hair reduction midway through my sessions?",
            a: "The reduction you have already achieved does not reverse. Treated follicles stay treated. But follicles that had not yet cycled into their growth phase were never reached, so hair from those continues as before. You are left with partial rather than wasted results, and you can resume later.",
          },
          {
            q: "What does a course of laser hair reduction cost?",
            a: "It depends on the area, your hair density and the number of sessions your plan calls for. Your first consultation is complimentary, and you will have the full cost in writing before anything is booked, including whether a package or individual sessions works out better for you.",
          },
        ],
      },
      {
        id: "safety",
        title: "Comfort, safety & skin type",
        items: [
          {
            q: "Is laser hair reduction painful?",
            a: "Most people describe each pulse as a warm snap against the skin that fades immediately, and cooling runs throughout the session. Coarse, dense areas such as the bikini line and underarms are felt more than arms or legs. Numbing cream is available if you would prefer it.",
          },
          {
            q: "Can laser hair reduction be done on dark skin?",
            a: "Yes, provided the wavelength is chosen for your skin. Longer wavelengths such as 1064 nm Nd:YAG are absorbed far less by pigment in the surface of the skin, which is what makes them appropriate for deeper tones. Settings follow your patch test, never a standard preset.",
          },
          {
            q: "Can laser hair reduction cause skin darkening?",
            a: "Temporary post-inflammatory hyperpigmentation is possible, more so on deeper skin tones, and it usually fades over a few months. It is largely preventable: the right wavelength, conservative energy, thorough cooling, never treating freshly tanned skin, and daily sunscreen afterwards. Lasting darkening is rare when the treatment is done properly.",
          },
          {
            q: "Is laser hair reduction safe for sensitive skin?",
            a: "Usually yes, with adjusted settings and a patch test first. Tell us about eczema, rosacea, psoriasis or any history of reacting badly to heat or skincare, and we will treat a small area and wait to see how your skin settles before booking a full session.",
          },
        ],
      },
      {
        id: "areas",
        title: "Areas we treat",
        items: [
          {
            q: "Is laser hair reduction safe for the face?",
            a: "Yes, the face is among the most commonly treated areas, covering upper lip, chin, full or lower face, side locks and beard shaping. Facial skin is thinner and more sensitive, so the settings are gentler and sessions are spaced a little closer together, at four to six weeks.",
          },
          {
            q: "Can I get laser hair reduction on my underarms?",
            a: "Yes, and it is one of the most requested areas. Underarm hair is typically coarse and dark, which is exactly what the laser targets best, so results tend to show early. A session takes around fifteen minutes, and it puts an end to the ingrown hairs shaving and waxing cause.",
          },
          {
            q: "Can laser hair reduction be done on the bikini area?",
            a: "Yes. Bikini and Brazilian-style treatment are routine, carried out with your comfort and privacy in mind. The skin here is sensitive and the hair coarse, so it is one of the areas people feel most. Numbing cream is available, and the results are usually among the most noticeable.",
          },
          {
            q: "Can men get laser hair reduction?",
            a: "Yes. Beard shaping and neckline tidying, chest, back, shoulders, arms and full body are all commonly treated. The technology, session counts and spacing are the same. Beard work is usually about defining a line or thinning density rather than clearing the area completely.",
          },
          {
            q: "Is full-body laser hair reduction possible?",
            a: "Yes. Full body covers arms, legs, underarms, front and back in a single appointment of around ninety minutes. It works out more economical than booking areas separately, and keeps every area on the same schedule, which matters, because separately booked areas drift out of sync.",
          },
        ],
      },
      {
        id: "before-after",
        title: "Before & after your session",
        items: [
          {
            q: "Can I shave before laser hair reduction?",
            a: "You should. Shave the area twelve to twenty-four hours before your session. The laser needs to reach the follicle, not spend its energy on hair sitting above the skin. Shaving is also the one hair-removal method you can keep using freely between sessions.",
          },
          {
            q: "Should I wax before laser hair reduction?",
            a: "No. Avoid waxing, threading, plucking and epilating for three to four weeks beforehand and throughout your course. All of them pull the follicle out, and the follicle is precisely what the laser needs to find. Shaving is fine, because it leaves the root in place.",
          },
          {
            q: "Is there any downtime after laser hair reduction?",
            a: "Effectively none. Mild redness and small raised bumps around each follicle are normal and usually settle within a few hours to a day. Most people go straight back to their day. Skip the gym, hot showers, steam and sauna for the first 24 to 48 hours.",
          },
          {
            q: "What should I avoid after laser hair reduction?",
            a: "For 24 to 48 hours: heat, sweat and friction: gym, hot showers, steam, sauna and swimming. For the rest of your course: waxing, threading and plucking. And broad-spectrum SPF 30+ daily on treated skin that sees light, which is the single most important step for pigment safety.",
          },
        ],
      },
    ],
  },
  {
    slug: "body-contouring",
    name: "Body Contouring & Slimming",
    eyebrow: "Body & Shape",
    headline: "Shape, not the number on the scale, treated area by area.",
    intro:
      "Non-invasive contouring for the pockets of fat that stay put whatever you do about them, supported by muscle work, lymphatic massage and traditional therapy. Medically assessed, no surgery, no downtime, and no pretence that any of it is a weight-loss programme.",
    image: "/images/service-body-contouring.webp",
    imageAlt: "Body contouring and slimming treatment at Auresca Care",
    metaTitle: "Body Contouring & Slimming in Gurugram — Auresca Care",
    metaDescription:
      "Non-invasive body contouring and slimming in Gurugram: cryolipolysis, laser lipolysis, muscle stimulation and lymphatic work, matched to you at a free consultation.",

    specs: [
      { icon: "body", label: "Typical course", value: "1–3 rounds per area" },
      { icon: "clock", label: "Session length", value: "30–60 min by area" },
      { icon: "check", label: "Downtime", value: "None, resume your day" },
      { icon: "sparkle", label: "Results show", value: "3 wks, settled by 12" },
      { icon: "shield", label: "Best for", value: "Localised, pinchable fat" },
      { icon: "stethoscope", label: "Supervision", value: "Medically led" },
    ],

    science: {
      title: "What body contouring can and cannot do",
      body: [
        "Losing weight and changing a shape are two different problems. When you lose weight, the fat cells you already have get smaller, everywhere, in whatever order your body decides — which is why the last place you want to lose it is usually the last place that goes. Contouring works the other way round: it reduces the number of fat cells in one specific pocket, and leaves the rest of you alone.",
        "Cryolipolysis, the most established of these treatments, works because fat crystallises at a higher temperature than skin, nerve and muscle do. Held at a controlled cold for a set time, the treated fat cells are damaged past recovery and cleared by your body over the following weeks, while the tissue above and around them comes through unharmed. A single round takes roughly 20–25% of the pinchable fat layer in the area it covers. It is gradual by design, and nothing about it is visible on the day.",
        "What none of it is, is weight loss. The mass involved is small, the scale often does not move at all, and it is not a treatment for obesity or for the visceral fat that sits deep around the organs, which is the fat that actually matters to your health. That fat answers to diet, sleep, movement and time. Contouring is for the shape left over once those are in hand.",
      ],
    },

    visit: {
      title: "What a session looks like",
      intro:
        "The first appointment decides whether any of this is worth doing for you, which is a question worth answering honestly before anything is booked.",
      steps: [
        {
          title: "Assessment & measurement",
          desc: "We look at what you actually want changed, check whether the fat there is the pinchable kind that responds or the deep kind that does not, and go through your medical history. Photographs and measurements are taken at the start, because memory is a poor judge of a gradual change.",
        },
        {
          title: "Mapping the plan",
          desc: "Which treatment suits which area, how many rounds it is likely to take, and in what order. Some areas want fat reduction, some want muscle, and some want neither — you will be told if the honest answer is that the treatment has little to offer you.",
        },
        {
          title: "The session",
          desc: "Cooling applicators draw the area in and hold it cold: intense for the first few minutes, then numb for the rest. Laser and muscle programmes are painless, the latter felt as strong involuntary contractions. Most people read or work through it.",
        },
        {
          title: "Massage & aftercare",
          desc: "The area is massaged straight afterwards, which is not a comfort measure — it measurably improves the outcome after cryolipolysis. You leave with written aftercare and the next appointment at the interval the area needs.",
        },
      ],
    },

    areas: {
      title: "What we offer",
      eyebrow: "Treatments & Sessions",
      columnLabel: "Treatment",
      intro:
        "The slimming and contouring menu as it stands. Which of these suits you, in what order and over how many sessions, is decided at your consultation once we have assessed the area — not from a list.",
      note: "Pricing depends on the treatment, the area and the plan agreed at consultation. Your first consultation is complimentary, and you will have the full cost in writing before anything is booked.",
      groups: [
        {
          title: "Slimming & contouring",
          rows: [
            { area: "Coolsculpt", sessions: "1–3 per area" },
            { area: "Lipo Laser", sessions: "6–12" },
            { area: "G5", sessions: "6–10" },
            { area: "Udhwarthana", sessions: "7–14" },
            { area: "Tummy Tuck", sessions: "On assessment" },
            { area: "NMS", sessions: "6–12" },
            { area: "FDS", sessions: "On assessment" },
            { area: "Curve Expert", sessions: "On assessment" },
            { area: "Slimzone", sessions: "On assessment" },
          ],
        },
      ],
    },

    technology: {
      title: "What each treatment actually does",
      intro:
        "These are different tools for different problems, and they are not interchangeable. Fat, muscle and fluid are three separate reasons an outline looks the way it does, and only an assessment tells you which one you are dealing with.",
      points: [
        {
          title: "Cryolipolysis",
          desc: "Controlled cooling that damages fat cells past recovery while sparing everything around them. The evidence behind it is the strongest in this section: roughly 20–25% of the pinchable layer per round, cleared over 8–12 weeks. For a defined pocket you can hold between finger and thumb.",
        },
        {
          title: "Laser lipolysis",
          desc: "Low-level laser applied to the surface, which prompts fat cells to release part of their contents rather than destroying them. Gentler, painless, and asks something of you afterwards — the released content has to be used, so a session is followed by movement. Modest on its own; useful inside a programme.",
        },
        {
          title: "Muscle stimulation",
          desc: "Electrical stimulation driving contractions deeper and more often than voluntary training reaches. It builds and tones the muscle under the fat, which changes an outline — a flatter abdomen, a lifted seat — without removing a gram of fat. Different problem, different tool.",
        },
        {
          title: "Mechanical & lymphatic massage",
          desc: "Deep mechanical massage over the treated area to move fluid, ease heaviness and soften the look of dimpling. It supports the rest of the work and makes the settling more comfortable. It is not a fat-removal treatment and is not offered as one.",
        },
        {
          title: "Udhwarthana",
          desc: "A traditional Ayurvedic massage worked with herbal powders against the direction of the hair. It is offered here as supportive therapy — circulation, skin texture, the ritual of it — alongside the clinical treatments rather than as a substitute for them.",
        },
        {
          title: "Loose skin is a separate question",
          desc: "Skin that has lost its spring will not tighten because the volume beneath it has gone, and taking volume out of a lax area can make it look worse. We assess laxity before anything else and will tell you plainly if that, and not the fat, is what you are seeing.",
        },
      ],
    },

    suitability: {
      title: "Is it right for you?",
      goodTitle: "Usually a good fit",
      good: [
        "Within a few kilos of your usual weight, with a pocket that stays regardless of diet and training",
        "Fat you can pinch and hold: soft and superficial, rather than a firm abdomen that will not give",
        "Areas that resist training on almost everyone — flanks, inner thighs, the area under the chin",
        "Shape changes after pregnancy, once you are cleared, no longer breastfeeding and settled at a stable weight",
        "Anyone who wants a change of outline without surgery, anaesthetic or time away from work",
      ],
      waitTitle: "Wait, or talk to us first",
      wait: [
        "Looking for weight loss: this is not that treatment, and we would rather say so at the consultation than after your money is spent",
        "A firm, non-pinchable abdomen, which usually means visceral fat — it sits too deep for any of this to reach",
        "Pregnancy or breastfeeding",
        "Cold-related conditions such as cryoglobulinaemia, cold agglutinin disease or paroxysmal cold haemoglobinuria, which rule out cryolipolysis entirely",
        "A hernia at or near the area you want treated",
        "A pacemaker, defibrillator or metal implant, which rules out muscle stimulation over that area",
        "Active infection, broken skin, recent surgery or significant scarring in the area",
        "Blood-thinning medication or a bleeding disorder: bring your full list, including supplements",
        "Marked skin laxity in the area, where removing volume can make the loose skin more obvious rather than less",
      ],
    },

    care: {
      title: "Before & after your session",
      intro:
        "There is very little to do for this treatment, and most of what matters happens in the weeks afterwards rather than the hour itself.",
      beforeTitle: "In the days before",
      before: [
        "Eat normally on the day. There is no fasting, and arriving hungry only makes a long session uncomfortable.",
        "Drink water through the day before and the day itself: your body clears the treated fat through its own drainage.",
        "Skip alcohol the night before, which leaves tissue more prone to bruising.",
        "Wear something loose and comfortable that will go back on easily afterwards.",
        "Tell us about implants and devices, any hernia, cold-related conditions, bleeding disorders and every medication and supplement you take.",
        "Let us take the photographs and measurements. A gradual change over three months is exactly the kind your eye cannot judge from memory.",
      ],
      afterTitle: "For the days after",
      after: [
        "Redness, firmness, swelling, tingling and cramping in the area are normal after cryolipolysis and settle over days.",
        "Numbness in the treated patch is common and can last one to three weeks. It resolves on its own.",
        "Massage the area as shown, for the days we specify. It is uncomfortable for the first minute or so and it measurably improves the result.",
        "Move after a laser session — a brisk walk the same day. That part is not optional, it is how the released content is actually used.",
        "Back to your day immediately. There is no downtime, no dressing and nothing to keep you out of the gym beyond your own comfort.",
        "Do not judge it at day three, or at week two. The earliest change shows around three weeks and the picture is not complete until eight to twelve.",
        "Keep your weight steady while the course runs, or you will not be able to tell what the treatment did.",
      ],
    },

    results: {
      title: "What results look like, honestly",
      lead: "This changes the shape of an area. It does not change what the scale says, and a clinic promising you both is promising something the treatment does not do.",
      body: [
        "A round of cryolipolysis removes roughly 20–25% of the pinchable fat layer under the applicator. That is a real, measurable change in an outline, and it is also nowhere near the whole of a pocket — which is why a second round on the same area is common rather than a sign something went wrong. The first change tends to show at three to four weeks, and the area is not finished settling until eight to twelve.",
        "The fat cells cleared in a treated area are gone and do not regenerate. That is not the same as a permanent result. The cells you still have, there and everywhere else, expand and shrink with your weight exactly as before, so gaining weight afterwards still shows — it simply distributes differently than it used to. Holding the result is a matter of holding your weight.",
        "Muscle stimulation and massage change an outline by a different route and on a different timeline, and combining them with fat reduction is common. What none of them do is act on health markers. If the goal is metabolic rather than cosmetic, the honest answer is that this is the wrong section of the menu, and we will tell you so.",
      ],
      points: [
        {
          title: "At 3–4 weeks",
          desc: "The first visible change, usually noticed in how clothes sit rather than in the mirror. Measurements start to move before the eye catches up.",
        },
        {
          title: "At 8–12 weeks",
          desc: "The full picture for that round, and the point at which we compare against your starting photographs and decide together whether the area wants another.",
        },
        {
          title: "Holding it",
          desc: "A stable weight and some strength work. There is no maintenance session that substitutes for either, and we will not sell you one.",
        },
        {
          title: "What changes the outcome",
          desc: "How much is there to begin with, whether the fat is superficial or visceral, the condition of the skin above it, and keeping the course to its intervals.",
        },
      ],
    },

    faqGroups: [
      {
        id: "basics",
        title: "The basics",
        items: [
          {
            q: "What is non-invasive body contouring?",
            a: "It is a group of treatments that change the shape of a specific area without surgery, anaesthetic or recovery time. Some reduce the fat in a defined pocket, some build the muscle beneath it, and some work on fluid and circulation. All of them are applied from the surface of the skin, and you walk out and carry on with your day.",
          },
          {
            q: "Is body contouring the same as weight loss?",
            a: "No, and it is the single most important thing to understand before booking. The mass involved is small enough that the scale often does not move at all. It changes the outline of one area rather than reducing your body weight, and it does nothing for the deep visceral fat that carries the actual health risk.",
          },
          {
            q: "Does body contouring actually work?",
            a: "Cryolipolysis has the strongest evidence of anything in this section, with a consistent reduction of roughly 20–25% of the pinchable fat layer per round in a treated area. The rest range from modest to supportive. We would rather be specific about which is which than describe the whole menu in the same confident terms.",
          },
          {
            q: "Am I a suitable candidate?",
            a: "Usually yes if you are close to your usual weight and there is a soft pocket you can pinch that has not shifted with diet or training. Usually no if you are looking for weight loss, or if the area is firm rather than pinchable, which generally means the fat sits too deep to reach. The consultation answers this properly.",
          },
        ],
      },
      {
        id: "sessions",
        title: "Sessions, schedule & cost",
        items: [
          {
            q: "How many sessions will I need?",
            a: "For fat reduction, one to three rounds per area, decided by how much is there and how much you want changed. Muscle and massage programmes run longer, typically six to twelve sessions. Your own plan is set at the consultation once we have seen and assessed the area, not before.",
          },
          {
            q: "How far apart are the sessions?",
            a: "The same area is not re-treated with cryolipolysis for eight to twelve weeks, because that is how long your body takes to clear the last round — treat it again sooner and you are guessing at a result you cannot yet see. Muscle and massage programmes run far closer together, usually once or twice a week.",
          },
          {
            q: "How long does a session take?",
            a: "Between about thirty and sixty minutes for most areas, depending on how many applicators or programmes are involved, plus the massage afterwards. Allow extra for the first appointment, which includes the assessment, photographs and measurements.",
          },
          {
            q: "What does it cost?",
            a: "It depends on the area, how many applicators or programmes it takes and how many rounds your plan calls for. Your first consultation is complimentary, and you will have the full cost in writing before anything is booked, including whether a package or individual sessions works out better for you.",
          },
        ],
      },
      {
        id: "safety",
        title: "Comfort & safety",
        items: [
          {
            q: "Does it hurt?",
            a: "Cryolipolysis is intense for the first few minutes as the applicator draws the area in and the cold sets in, after which the area goes numb and most people read or work through the rest. The massage afterwards is the part people mention. Laser sessions are painless, and muscle stimulation is felt as strong contractions rather than pain.",
          },
          {
            q: "What are the side effects?",
            a: "After cryolipolysis: redness, swelling, firmness, tenderness, cramping and bruising in the area, settling over days, with numbness in the treated patch that can last one to three weeks. Muscle programmes can leave the same soreness as a hard session at the gym. None of it requires time off.",
          },
          {
            q: "Is there a risk of it going wrong?",
            a: "The uncommon one worth knowing about is paradoxical adipose hyperplasia, where the treated area grows firmer and larger instead of smaller over the months afterwards. It is rare, it is not dangerous, and it does not resolve on its own — it needs correcting surgically. Any clinic offering cryolipolysis should raise this with you before you consent, and we do.",
          },
          {
            q: "Who should not have these treatments?",
            a: "Cryolipolysis is ruled out by cold-related conditions such as cryoglobulinaemia, cold agglutinin disease and paroxysmal cold haemoglobinuria, and by a hernia at the site. Muscle stimulation is ruled out over a pacemaker, defibrillator or metal implant. All of it is deferred in pregnancy and breastfeeding, and over active infection or broken skin.",
          },
        ],
      },
      {
        id: "results",
        title: "Results & afterwards",
        items: [
          {
            q: "When will I see a difference?",
            a: "The earliest change shows around three to four weeks, and the area is not finished settling until eight to twelve. Measurements usually move before your eye registers anything, which is exactly why the photographs and measurements at the first appointment matter more than they seem to at the time.",
          },
          {
            q: "Are the results permanent?",
            a: "The fat cells cleared from a treated area are gone and do not come back. What is not permanent is the outcome: every cell you still have expands and shrinks with your weight as it always did, so gaining weight afterwards still shows, just distributed differently. A stable weight is what holds the result.",
          },
          {
            q: "Will I need more than one round?",
            a: "Often, yes. One round takes roughly a fifth to a quarter of the pinchable layer, which is a visible change and not the whole of it. We compare against your starting photographs at eight to twelve weeks and decide then, on what the area actually did rather than on a package sold in advance.",
          },
          {
            q: "Can I combine treatments?",
            a: "Frequently that is the better plan, because fat, muscle and fluid are separate reasons an outline looks the way it does. A common combination is fat reduction for a pocket, muscle work for the tone underneath and lymphatic massage through the course. What the combination should be depends entirely on the assessment.",
          },
        ],
      },
    ],
  },
  {
    slug: "facials",
    name: "Facials & Medi-Facials",
    eyebrow: "Skin",
    headline: "Clinical facials that cleanse, hydrate and refresh — matched to your skin, not a fixed menu.",
    intro: "Our facials and medi-facials are dermatology-led treatments designed to deep-cleanse, hydrate and give your skin a temporary, healthy glow. At Auresca Care in Gurugram we choose the right facial for your skin type and concern, and we are honest about what a facial does and what it does not: it maintains and refreshes, it does not replace medical treatment for active acne or pigmentation.",
    image: "/images/service-facials.webp",
    imageAlt: "A clinical medi-facial being performed at Auresca Care",
    metaTitle: "Facials & Medi-Facials in Gurugram — Auresca Care",
    metaDescription: "Dermatology-led facials and medi-facials in Gurugram — HydraFacial, carbon, RF and more to cleanse, hydrate and refresh your skin. Book a free consultation.",
    specs: [
      { icon: "clock", label: "Session time", value: "30–60 minutes" },
      { icon: "drop", label: "Downtime", value: "None to minimal" },
      { icon: "sparkle", label: "Glow appears", value: "Same day, builds with upkeep" },
      { icon: "check", label: "Comfort", value: "Relaxing, non-invasive" },
      { icon: "leaf", label: "Best as", value: "Regular monthly upkeep" },
      { icon: "stethoscope", label: "Supervision", value: "Dermatology-led" },
    ],
    science: {
      title: "How a clinical facial actually works",
      body: [
        "A facial is a structured routine of cleansing, exfoliation, extraction, treatment and hydration performed on the skin's surface. Its job is to remove the build-up of dead cells, oil and debris that dulls the complexion and clogs pores, then to deliver hydrating and soothing ingredients so the skin looks clearer, softer and more even. The result is a temporary glow — skin that reflects light more evenly because the surface is smoother and better hydrated.",
        "A medi-facial goes a step further than a spa facial by using clinical-grade actives, controlled exfoliation and, in some cases, devices such as vacuum extraction, radiofrequency or lasers. Because these are stronger tools, they are chosen and supervised with your skin type in mind. This is why we assess your skin first rather than offering a single fixed facial to everyone — oily, acne-prone, dry, sensitive and pigmented skins each respond differently, and the wrong exfoliation can irritate rather than help.",
        "It is worth being clear about the limits. A facial maintains and refreshes; it does not replace medical treatment for active acne, melasma or deeper pigmentation, which need targeted therapy over time. Think of facials as upkeep between, or alongside, any medical plan — most people notice their skin looks brighter and feels smoother for a week or two, and that this builds with regular, sensible upkeep rather than one dramatic session.",
      ],
    },
    visit: {
      title: "What a facial at Auresca looks like",
      intro: "Every facial begins with a short skin assessment so we choose the right one for you on the day. The steps below are the general shape of a session; the actives and devices vary by facial type.",
      steps: [
        { title: "Assess & cleanse", desc: "We look at your skin type, hydration and any concerns, then double-cleanse to remove make-up, sunscreen and surface oil so the skin is a clean canvas." },
        { title: "Exfoliate & extract", desc: "Gentle exfoliation lifts dead cells, and where appropriate we clear congested pores — by hand or with vacuum-assisted extraction — to reduce blackheads and blockages." },
        { title: "Treat", desc: "The core of the facial: a mask, serum, peel, radiofrequency or laser pass tailored to your skin, delivering hydration, brightening or soothing actives." },
        { title: "Hydrate & protect", desc: "We seal the skin with a hydrating layer and finish with broad-spectrum sunscreen, then talk you through simple aftercare and when to return." },
      ],
    },
    areas: {
      title: "The facial menu",
      eyebrow: "The menu",
      columnLabel: "Facial",
      intro: "These are the facials we offer most often in Gurugram. Which one suits you depends on your skin type and goal — we will recommend at your consultation rather than asking you to choose blind.",
      note: "Frequencies are typical guidance, not fixed rules; sensitive or reactive skin may need more space between sessions. A single facial refreshes the skin; a short course gives a more even, lasting result.",
      groups: [
        {
          title: "Signature medi-facials",
          rows: [
            { area: "HydraFacial", sessions: "Single or course of 4–6, then monthly upkeep" },
            { area: "Carbon Facial", sessions: "Course of 4–6, spaced 2–4 weeks" },
            { area: "Q-Switch / Instabright", sessions: "Course of 4–6, spaced 2–4 weeks" },
            { area: "RF Facial", sessions: "Course of 4–6, then monthly upkeep" },
          ],
        },
        {
          title: "Classic & express facials",
          rows: [
            { area: "Medi Facial", sessions: "Single or monthly upkeep" },
            { area: "Mud Facial", sessions: "Single or every 3–4 weeks for oily skin" },
            { area: "Fruit Facial", sessions: "Single or monthly upkeep" },
          ],
        },
      ],
    },
    technology: {
      title: "The devices and actives behind each facial",
      intro: "Not every facial uses a device, and that is by design. Here is what the main options actually do, so you understand what you are choosing.",
      points: [
        { title: "HydraFacial — cleanse, extract, hydrate", desc: "A vortex handpiece cleanses and exfoliates, then uses gentle suction to clear pores while simultaneously infusing hydrating and antioxidant serums. It suits most skin types and is a comfortable, no-downtime way to deep-clean and hydrate in one pass." },
        { title: "Carbon & Q-Switch lasers", desc: "A carbon facial applies a fine carbon layer that absorbs into pores, then a Q-switch laser passes over to gently exfoliate, reduce oil and refine the look of pores. Used alone, the Q-switch (Instabright) helps even out dullness and mild surface pigmentation for a brighter finish." },
        { title: "Radiofrequency (RF)", desc: "RF energy warms the deeper layers of the skin to encourage firmness and a temporary tightening effect, paired with hydration. It adds a toning element to a facial but is a gradual, cumulative treatment rather than a one-session change." },
        { title: "Masks & mild actives", desc: "Mud, fruit-enzyme and clinical serum masks do the quieter work — clay and mud draw out excess oil for oily skin, fruit enzymes lightly brighten, and hydrating serums calm and plump. Simple, gentle, and easy to repeat regularly." },
      ],
    },
    suitability: {
      title: "Is a facial right for you?",
      goodTitle: "Facials suit you if",
      good: [
        "You want to maintain clear, hydrated, healthy-looking skin between or alongside medical treatments",
        "Your skin looks dull, congested or dehydrated and you want a refresh before an event",
        "You have mild oiliness, blackheads or uneven tone and want gentle, regular upkeep",
        "You prefer a comfortable, no-downtime treatment you can fit around daily life",
        "You want expert guidance on which facial actually suits your skin type",
      ],
      waitTitle: "Better to wait or see us first if",
      wait: [
        "You have active, inflamed or cystic acne — this needs medical treatment first, not exfoliation",
        "You have an active skin infection, cold sore or open, broken or sunburnt skin",
        "You have very reactive or recently lasered skin that needs time to settle",
        "You are seeking treatment for melasma or deeper pigmentation, which needs a targeted medical plan",
        "You are pregnant — we will simply adjust to gentle, pregnancy-safe options",
      ],
    },
    care: {
      title: "Before and after your facial",
      intro: "Facials are low-maintenance, but a little care on either side helps the skin respond well and keeps the glow for longer.",
      beforeTitle: "Before your facial",
      before: [
        "Avoid strong exfoliating acids or retinoids for 2–3 days beforehand so skin is not over-sensitised",
        "Come with clean skin where possible, and tell us about any recent treatments or medications",
        "Reschedule if you have active breakouts of cold sores, sunburn or broken skin",
        "Avoid waxing or threading the facial area on the same day",
      ],
      afterTitle: "After your facial",
      after: [
        "Keep skin simple for 24 hours — a gentle cleanser and moisturiser are enough",
        "Wear broad-spectrum sunscreen daily; skin is a little more sun-sensitive after exfoliation",
        "Hold off on strong actives, scrubs and retinoids for 2–3 days",
        "Avoid heavy sweating, saunas and hot yoga for the rest of the day, especially after a laser or RF facial",
        "Mild redness or a warm flush can occur and usually settles within a few hours",
      ],
    },
    results: {
      title: "What results to expect",
      lead: "A facial gives an immediate refresh; regular upkeep is what keeps skin looking consistently clear.",
      body: [
        "Most people notice their skin looks brighter and feels smoother and cleaner straight after a facial, with the glow typically lasting around one to two weeks. This is a temporary, surface-level effect — the skin is more hydrated and evenly textured, so it catches the light better.",
        "The more lasting benefit comes from rhythm rather than intensity. Skin that is deep-cleaned and hydrated on a regular schedule tends to stay clearer and more balanced over time, which is why we usually suggest monthly upkeep rather than occasional one-offs. Device-based facials such as RF build their effect gradually over a course.",
        "We will always be honest about what a facial can and cannot do. If your real concern is persistent acne or pigmentation, we will say so and point you towards the right medical treatment, using facials as supportive upkeep alongside it.",
      ],
      points: [
        { title: "Same day", desc: "Cleaner, smoother, more hydrated skin with a fresh glow; any mild redness settles within hours." },
        { title: "1–2 weeks", desc: "The glow holds and skin typically looks more even and refreshed before gradually returning to baseline." },
        { title: "Over a course", desc: "With RF, carbon or Q-switch courses, most people notice a more even tone and refined texture building session by session." },
        { title: "With upkeep", desc: "Monthly facials help maintain clearer, balanced skin, supporting rather than replacing any medical routine." },
      ],
    },
    faqGroups: [
      {
        id: "basics",
        title: "The basics",
        items: [
          { q: "What is a medi-facial and how is it different from a salon facial?", a: "A medi-facial is a dermatology-led facial that uses clinical-grade actives and, in some cases, devices such as vacuum extraction, radiofrequency or lasers. Compared with a salon facial it is chosen and supervised for your specific skin type, with more emphasis on results and safety than on relaxation alone — though it is still a comfortable treatment." },
          { q: "What is a HydraFacial and how long does it last?", a: "A HydraFacial uses a vortex handpiece to cleanse, gently exfoliate and extract from the pores while infusing hydrating serums in one pass. The fresh, hydrated glow is usually visible the same day and typically lasts around one to two weeks, which is why many people repeat it monthly." },
          { q: "HydraFacial vs a regular facial — what's the difference?", a: "A regular facial relies mainly on manual cleansing, masks and hand extraction. A HydraFacial adds controlled suction to clear pores and simultaneously delivers serums into the skin, so it tends to be more thorough and consistent, with no downtime. Both refresh the skin; the HydraFacial is simply a more clinical, device-based version." },
          { q: "How long does a facial take at your Gurugram clinic?", a: "Most facials at our Gurugram clinic take around 30 to 60 minutes depending on the type, plus a short skin assessment beforehand. There is little to no downtime, so most people return to their day straight afterwards." },
          { q: "What is a carbon facial and what does it target?", a: "A carbon facial applies a fine carbon layer that settles into the pores, then a Q-switch laser passes over it to gently exfoliate, reduce surface oil and refine the look of pores. It suits oily and dull skin that wants a brighter, cleaner finish, and is best done as a short course." },
        ],
      },
      {
        id: "which-facial",
        title: "Which facial is right for me",
        items: [
          { q: "Which facial is best for oily, acne-prone skin?", a: "For oily skin without active inflammation, a HydraFacial, mud facial or carbon facial can help clear congestion and manage oil. If you have active or cystic acne, we would treat that medically first rather than exfoliate over it — a facial maintains skin, it does not replace acne treatment." },
          { q: "Which facial helps with dull skin and dehydration?", a: "A HydraFacial is a strong choice for dull, dehydrated skin because it deep-cleans and infuses hydrating serums in one go. A Q-switch or Instabright facial can also help brighten a tired, uneven complexion. We will match the facial to your skin at your consultation." },
          { q: "What does an RF facial add compared with other facials?", a: "An RF facial uses radiofrequency energy to gently warm the deeper layers of the skin, adding a firming and toning element alongside hydration. It is a gradual, cumulative treatment done over a course, rather than a single dramatic session — a good option if you want subtle firmness as well as a glow." },
          { q: "Are facials good for acne-prone skin?", a: "Certain facials can help acne-prone skin by keeping pores clear and controlling oil, but only when the acne is mild and not actively inflamed. For moderate to severe or cystic acne, medical treatment comes first, and facials play a supporting maintenance role once things are under control." },
          { q: "How do I choose between all these facials?", a: "You do not have to choose alone. We assess your skin type, hydration and concerns on the day and recommend the facial that fits, rather than asking you to pick blind from a menu. Your skin can also change with season and routine, so the right facial may vary over time." },
        ],
      },
      {
        id: "during-after",
        title: "During & after",
        items: [
          { q: "Does a facial hurt or have any downtime?", a: "Facials are relaxing and non-invasive, with little to no downtime. You may feel mild warmth, tingling or light suction depending on the type. Laser and RF facials can leave a temporary warm flush or mild redness that usually settles within a few hours." },
          { q: "Can I wear make-up and go out after a facial?", a: "We usually suggest keeping skin bare for the rest of the day so it can breathe and absorb the actives, but light make-up the next day is fine for most people. The main essentials are gentle products and daily sunscreen for a couple of days afterwards." },
          { q: "What should I avoid after a facial?", a: "For 2–3 days, avoid strong exfoliating acids, scrubs and retinoids. For the rest of the day, skip heavy sweating, saunas and hot yoga, especially after a laser or RF facial, and always use broad-spectrum sunscreen as skin is a little more sun-sensitive after exfoliation." },
          { q: "Is it normal for my skin to break out or go red after a facial?", a: "Mild redness or a warm flush is common and usually settles within a few hours. Occasionally, extraction can bring a blocked pore to the surface over the next day or two. If you notice persistent redness, irritation or breakouts, let us know so we can adjust the next facial." },
        ],
      },
      {
        id: "suitability-safety",
        title: "Suitability & safety",
        items: [
          { q: "Are facials safe for sensitive skin?", a: "Yes, with the right choice. For sensitive or reactive skin we favour gentle, hydrating facials and avoid aggressive exfoliation or strong actives. Telling us about your skin's history helps us pick a calming option and space sessions sensibly." },
          { q: "Can I have a facial during pregnancy?", a: "Many gentle, hydrating facials are suitable during pregnancy, but we avoid certain actives and some device-based treatments as a precaution. Let us know you are pregnant and we will simply adjust to a safe, comfortable option." },
          { q: "When should I not get a facial?", a: "Avoid facials on active skin infections, cold sores, open, broken or sunburnt skin, or over active inflamed acne. If your skin has recently been lasered or is very reactive, it is best to let it settle first. When in doubt, we will assess and advise before treating." },
          { q: "Can facials treat melasma or deep pigmentation?", a: "Facials can help with mild dullness and surface unevenness, but they do not treat melasma or deeper pigmentation, which need a targeted medical plan over time. We are honest about this — where pigmentation is the real concern, we will recommend the right medical treatment and use facials only as supportive upkeep." },
          { q: "Are medi-facials suitable for men?", a: "Yes. Facials work the same way regardless of gender and are a straightforward way to manage oil, congestion and dullness. We tailor the facial to your skin type and concerns, not to any assumptions." },
        ],
      },
      {
        id: "results-upkeep",
        title: "Results & upkeep",
        items: [
          { q: "How often should I get a medi-facial?", a: "For most people, monthly upkeep works well to keep skin clear, hydrated and balanced. Device-based facials such as carbon, Q-switch or RF are usually done as a short course of 4–6 sessions spaced two to four weeks apart, then maintained monthly. We will suggest a rhythm that fits your skin and schedule." },
          { q: "How long does the glow from a facial last?", a: "Most people notice a brighter, smoother look the same day, with the glow typically lasting around one to two weeks before gradually returning to baseline. It is a temporary, surface-level effect, which is why regular upkeep keeps skin looking consistently fresh." },
          { q: "Do I need a course of facials or is one enough?", a: "A single facial gives a genuine refresh and is perfect before an event. A short course tends to give a more even, longer-lasting result, particularly with device-based facials where the effect builds session by session. We will only suggest a course where it genuinely helps." },
          { q: "Will a facial replace my acne or pigmentation treatment?", a: "No, and we would not present it that way. A facial maintains and refreshes the skin but does not replace medical treatment for acne, melasma or deeper pigmentation. The best approach is usually a medical plan for the underlying concern, with facials as supportive upkeep alongside it." },
          { q: "Do you offer a consultation before booking a facial in Gurugram?", a: "Yes. We offer a free consultation at our Gurugram clinic where we assess your skin and recommend the facial that genuinely suits you, along with a sensible frequency. There is no pressure to book a course — just honest guidance on what will help your skin." },
        ],
      },
    ],
  },
  {
    slug: "antiaging",
    name: "Antiaging & Injectables",
    eyebrow: "Dermatology-led aesthetics",
    headline: "Medical, prescription-grade anti-ageing — planned by a doctor, dosed conservatively, and always consultation-first.",
    intro: "Auresca Care is a dermatology-led clinic in Gurugram offering medically supervised anti-ageing and injectable treatments. Every plan begins with an assessment by a qualified medical professional, so what you receive is matched to your skin, your anatomy and realistic goals — not a fixed package.",
    image: "/images/service-antiaging.webp",
    imageAlt: "An expert-administered anti-ageing injectable treatment at Auresca Care",
    metaTitle: "Antiaging & Injectables in Gurugram — Auresca Care",
    metaDescription: "Doctor-led Botox, fillers, PRP, Profhilo and skin boosters in Gurugram. Conservative, natural-looking anti-ageing under medical supervision. Book a free consultation.",
    specs: [
      { icon: "stethoscope", label: "Administered by", value: "Qualified medical professionals only" },
      { icon: "clock", label: "Botox longevity", value: "Typically 3–4 months" },
      { icon: "drop", label: "Filler longevity", value: "~6–18 months by type & area" },
      { icon: "sparkle", label: "Approach", value: "Conservative dosing, natural-looking" },
      { icon: "check", label: "Consultation", value: "Free, assessment-first, written quote" },
      { icon: "shield", label: "Products", value: "Prescription-grade, medically sourced" },
    ],
    science: {
      title: "The science, explained plainly",
      body: [
        "Ageing skin changes in several ways at once, and no single treatment addresses all of them. Repeated muscle movement etches dynamic lines into the forehead, between the brows and around the eyes. Fat pads descend and deflate, bone remodels, and the face loses structural support — which reads as flatness and folds rather than simple wrinkles. Collagen and elastin decline, so skin becomes thinner and less springy. Sun exposure and hormones drive pigmentation and dullness. Because these processes are different, we treat them with different tools, and often in combination — a neurotoxin for movement, a filler for lost volume, a biostimulator or regenerative therapy for skin quality.",
        "Neurotoxin (Botox) works by temporarily relaxing the specific muscles that crease the skin when you frown or raise your brows. It does not fill anything; it softens the movement that forms the line. That is why it suits dynamic, expression-driven lines and why static lines already etched at rest respond only partially. Hyaluronic-acid fillers do the opposite job — they restore volume and support where tissue has deflated, lifting a fold or refining a contour. Skin boosters, Profhilo and PDRN are a third category: they improve the quality and hydration of the skin itself rather than freezing movement or adding shape, working gradually over a short course.",
        "Regenerative therapies use your body's own repair signalling. PRP and GFC are prepared from a small sample of your own blood, concentrating platelets and growth factors that prompt the skin to renew. Exosomes are cell-signalling messengers used to support that renewal. None of these is instant or guaranteed; they build change over weeks and depend on your skin, age and health. We are honest about that — we plan in ranges, dose conservatively, and would rather do less well than promise more than the biology can deliver.",
      ],
    },
    visit: {
      title: "What a visit looks like",
      intro: "The first appointment is an assessment, not a sales pitch. We only proceed once you understand what a treatment can and cannot do for you.",
      steps: [
        { title: "Free consultation", desc: "A qualified medical professional reviews your skin, medical history and goals, examines the areas of concern and tells you honestly what is and isn't suitable." },
        { title: "A written plan", desc: "You receive a clear, written recommendation and quote — the treatment, the conservative dose or course, expected longevity and realistic outcomes, with no pressure to decide on the day." },
        { title: "The treatment", desc: "Carried out under medical supervision using prescription-grade products, with numbing where appropriate. Most injectable sessions take 20–45 minutes." },
        { title: "Review & follow-up", desc: "For injectables we review at around two weeks and can top up if needed; for courses we schedule your sessions and monitor progress over time." },
      ],
    },
    areas: {
      title: "Treatments we offer",
      eyebrow: "The menu",
      columnLabel: "Treatment",
      intro: "A dermatology-led menu spanning regenerative therapy, medically supervised injectables, IV drips and resurfacing. Longevity and course length are typical ranges — your plan is set at consultation.",
      note: "All injectable and prescription treatments are administered by qualified medical professionals under medical supervision, never a technician. Ranges are indicative, not guarantees; individual results vary.",
      groups: [
        {
          title: "Regenerative therapy & pigmentation",
          rows: [
            { area: "PRP — Skin (Vampire Facial)", sessions: "3 sessions, 4 wks apart; upkeep 6–12 monthly" },
            { area: "GFC — Skin (Advanced Vampire Facial)", sessions: "3 sessions, 4 wks apart" },
            { area: "Exosomes — Face", sessions: "Short course of 3, 2–4 wks apart" },
            { area: "Body Peel", sessions: "Course of 3–6, spaced 2–4 wks" },
            { area: "Deep Pigmentation Peel", sessions: "Course of 3–6; results gradual" },
          ],
        },
        {
          title: "Injectables",
          rows: [
            { area: "Botox", sessions: "Lasts ~3–4 months; review at 2 wks" },
            { area: "Fillers", sessions: "Lasts ~6–18 months by type & area" },
            { area: "Skin Booster", sessions: "Short course of 2–3, 3–4 wks apart" },
            { area: "Profhilo", sessions: "2 sessions ~4 wks apart, then 6-monthly" },
            { area: "Hyaluronic", sessions: "By area; typically 6–12 months" },
            { area: "PDRN", sessions: "Course of 3–4, 2–3 wks apart" },
            { area: "Threads / Collagen Threads", sessions: "Effect builds over months; ~12–18 months" },
            { area: "Mounjaro", sessions: "Prescription programme; medical evaluation required" },
          ],
        },
        {
          title: "IV drips",
          rows: [
            { area: "Vitamin Drip", sessions: "As advised after medical review" },
            { area: "Miracle White Drip", sessions: "Course as advised; effects gradual" },
          ],
        },
        {
          title: "Resurfacing & removal",
          rows: [
            { area: "Dermapen / Microneedling", sessions: "Course of 3–4, 4 wks apart" },
            { area: "Mole/Wart & Skin Tag Removal", sessions: "Usually a single session; assessed first" },
            { area: "Tattoo Removal", sessions: "Multiple sessions, 6–8 wks apart" },
            { area: "Fractional Laser", sessions: "Course of 3–4, 4–6 wks apart" },
          ],
        },
      ],
    },
    technology: {
      title: "How we keep it safe and precise",
      intro: "The tools matter, but so does the judgement behind them. Ours is a dermatology-led approach where medical assessment always comes before any needle or device.",
      points: [
        { title: "Prescription-grade products", desc: "We use medically sourced, regulated neurotoxins and fillers, chosen and prescribed for you rather than a one-size product for everyone." },
        { title: "Medical supervision throughout", desc: "Every injectable is planned and delivered by a qualified medical professional who understands facial anatomy, danger zones and how to manage complications." },
        { title: "Conservative, staged dosing", desc: "We start low and review. It is easy to add more later; over-treatment is far harder to undo, so we build gradually towards a natural result." },
        { title: "Reversibility where it exists", desc: "Hyaluronic-acid fillers can, in most cases, be dissolved if needed — an important safety margin we discuss with you before treatment." },
      ],
    },
    suitability: {
      title: "Is this right for you?",
      goodTitle: "Often a good fit",
      good: [
        "Dynamic lines from expression — forehead, frown, crow's feet — that you'd like softened, not frozen",
        "Volume loss or folds where a filler can restore support and contour",
        "Dull, crepey or dehydrated skin that may respond to boosters, Profhilo, PRP or GFC",
        "Pigmentation or uneven tone open to a graded peel course",
        "Anyone who wants a conservative, natural-looking result and honest advice first",
      ],
      waitTitle: "Reasons to wait or reconsider",
      wait: [
        "Pregnancy or breastfeeding — we postpone injectable and most prescription treatments",
        "Active skin infection, inflammation or breakout in the treatment area",
        "Certain neuromuscular conditions, bleeding disorders or relevant allergies — flag these at consultation",
        "Expecting a permanent or guaranteed outcome, or a same-day dramatic change",
        "Wanting Mounjaro as a cosmetic quick-fix — it requires full medical evaluation and monitoring, and isn't offered that way",
      ],
    },
    care: {
      title: "Before and after your treatment",
      intro: "A little preparation and sensible aftercare protect your result and lower the small risk of bruising or swelling. We give you written instructions specific to your treatment.",
      beforeTitle: "Before",
      before: [
        "Tell us your full medical history, medications and any prior treatments at consultation",
        "Where safe to do so, avoid alcohol and blood-thinning supplements (such as fish oil or high-dose vitamin E) for a couple of days before injectables",
        "Come with clean skin and no heavy make-up on the treatment area",
        "Avoid a big event within the first two weeks, as bruising or settling can occur",
      ],
      afterTitle: "After",
      after: [
        "Stay upright for a few hours after Botox and avoid rubbing the area",
        "Expect possible minor swelling, redness or bruising for a few days, especially with fillers",
        "Skip vigorous exercise, saunas, steam and alcohol for 24–48 hours",
        "Keep skin protected with SPF, particularly after peels, microneedling or laser",
        "Contact us promptly if you notice anything unusual — we review at around two weeks for injectables",
      ],
    },
    results: {
      title: "What results to expect",
      lead: "Real, natural-looking improvement — described in ranges, never promised as a fixed outcome.",
      body: [
        "Botox takes a few days to begin working and settles by around two weeks, softening the movement that creates lines rather than erasing every crease. Fillers show much of their effect immediately, then settle over one to two weeks as any swelling resolves. Regenerative and skin-quality treatments are the most gradual — you're building collagen and hydration over a course, so the change accrues over weeks to months.",
        "How long results last depends on the treatment, the area, your metabolism and lifestyle. We give you honest timelines at consultation and plan upkeep accordingly, rather than implying anything is permanent. Aftercare, sun protection and general skin health all influence how well a result holds.",
      ],
      points: [
        { title: "Botox", desc: "Softer dynamic lines; typically lasts around 3–4 months before movement gradually returns and a repeat is considered." },
        { title: "Fillers", desc: "Restored volume and contour; longevity around 6–18 months depending on product and area." },
        { title: "Profhilo & boosters", desc: "Improved hydration, glow and firmness over a short course, with 6-monthly maintenance for Profhilo." },
        { title: "PRP / GFC / exosomes", desc: "Gradual improvement in texture and quality across a course of sessions; results vary with skin and age." },
      ],
    },
    faqGroups: [
      {
        id: "basics",
        title: "The basics",
        items: [
          { q: "Where is Auresca Care and who performs the treatments?", a: "We are a dermatology-led aesthetic clinic in Gurugram, Haryana. All injectable and prescription treatments are performed by qualified medical professionals under medical supervision — never a technician." },
          { q: "Do I need a consultation before treatment?", a: "Yes, and it's free. Every plan in Gurugram starts with a medical assessment of your skin, history and goals. We only proceed once you understand what a treatment can and cannot achieve, and you receive a written quote with no pressure to decide on the day." },
          { q: "Will I look natural or 'done'?", a: "Our approach is conservative and natural-looking. We start with a lower dose and review, because it's easy to add more later and much harder to undo over-treatment. The aim is a refreshed version of you, not a frozen or altered look." },
          { q: "Are these treatments safe?", a: "When planned and delivered by qualified medical professionals using prescription-grade products, these are well-established medical treatments with a strong safety record. Risk is never zero — bruising, swelling and, rarely, more significant complications can occur — which is exactly why medical supervision and proper assessment matter." },
          { q: "How much do treatments cost in Gurugram?", a: "It depends on the treatment, the number of areas and the course length, so we don't quote a single figure. At your free consultation in Gurugram we assess you and give a clear, written quote for exactly what you need." },
        ],
      },
      {
        id: "botox-fillers",
        title: "Botox & fillers",
        items: [
          { q: "What does Botox actually do?", a: "Botox is a neurotoxin that temporarily relaxes the specific muscles that crease your skin when you frown or raise your brows. It softens dynamic, expression-driven lines. It doesn't fill anything, so deep static lines present at rest respond only partially." },
          { q: "How long does Botox last?", a: "Typically around 3–4 months. As the effect wears off, muscle movement gradually returns and lines reappear, at which point a repeat can be considered. Longevity varies with the area treated, dose and your individual metabolism." },
          { q: "Is Botox safe?", a: "Yes, when administered by a qualified medical professional who understands facial anatomy and dosing. Temporary side effects like minor bruising or a heavy feeling can occur. We review you at around two weeks and can fine-tune if needed. We don't offer it as a walk-in, technician-led service." },
          { q: "How long do fillers last?", a: "Roughly 6–18 months, depending on the type of filler and the area treated — lip filler tends to metabolise faster than filler placed in firmer structural areas. We use hyaluronic-acid fillers, which in most cases can be dissolved if ever needed." },
          { q: "Botox vs fillers — what's the difference?", a: "They solve different problems. Botox relaxes muscle movement to soften expression lines. Fillers restore lost volume and support to lift folds or refine contour. Many people benefit from a combination, planned conservatively at consultation." },
        ],
      },
      {
        id: "regenerative",
        title: "Regenerative (PRP / GFC / exosomes)",
        items: [
          { q: "What is a Vampire Facial (PRP) and does it work?", a: "PRP, or the Vampire Facial, uses a small sample of your own blood, concentrated to isolate platelets and growth factors, which are then applied to the skin to prompt renewal. It can improve texture and glow over a course of about three sessions, but results build gradually and vary between people — it isn't an instant or guaranteed fix." },
          { q: "PRP vs GFC vs exosomes — which is better?", a: "All three support skin renewal but differ in preparation. PRP uses concentrated platelets from your blood; GFC (Growth Factor Concentrate) is a more refined preparation of growth factors, sometimes called an advanced Vampire Facial; exosomes are cell-signalling messengers used to support repair. Which suits you depends on your skin and goals — we advise at consultation rather than pushing one option." },
          { q: "What are exosomes?", a: "Exosomes are tiny cell-signalling messengers that carry instructions between cells. In skin treatments they're used to support the skin's own renewal and repair processes, usually across a short course. As with all regenerative therapies, we describe expected benefits in ranges, not promises." },
          { q: "What do Profhilo, PDRN and skin boosters do?", a: "These improve the quality of the skin itself rather than freezing movement or adding shape. Profhilo hydrates and stimulates over 2 sessions about 4 weeks apart, then 6-monthly upkeep. PDRN and skin boosters are short courses that improve hydration, texture and glow gradually." },
          { q: "How do threads work?", a: "Collagen threads are placed under the skin to provide gentle support and to stimulate your own collagen over time. The effect builds over months and typically lasts around 12–18 months. Like all our treatments, they're assessed and placed under medical supervision." },
        ],
      },
      {
        id: "safety",
        title: "Safety & suitability",
        items: [
          { q: "Who shouldn't have these treatments?", a: "We postpone injectable and most prescription treatments during pregnancy and breastfeeding, and if there's an active infection or breakout in the area. Certain neuromuscular conditions, bleeding disorders and allergies also need review. Tell us your full history at consultation so we can advise safely." },
          { q: "What is Mounjaro and can I just get it for weight loss?", a: "Mounjaro (tirzepatide) is a prescription, doctor-supervised weight-management medication. It is only offered as a medically assessed programme with proper evaluation and ongoing monitoring — not as a cosmetic quick-fix. It requires medical evaluation to determine whether it's appropriate and safe for you, and we make no weight-loss guarantees." },
          { q: "Are the products you use genuine and regulated?", a: "Yes. We use prescription-grade, medically sourced products, prescribed for you individually. This is one reason injectables should be done in a medical setting rather than sought out cheaply — product provenance and correct handling directly affect safety." },
          { q: "Can filler be reversed if I don't like it?", a: "In most cases, hyaluronic-acid filler can be dissolved with an enzyme if needed. This is an important safety margin and one reason we favour these fillers. We discuss it with you before treatment, though we always aim to get it right conservatively the first time." },
        ],
      },
      {
        id: "during-after",
        title: "During & after",
        items: [
          { q: "Does it hurt and how long does it take?", a: "Discomfort is usually mild; we use numbing cream where appropriate. Most injectable sessions take about 20–45 minutes, and Botox is often quicker. Peels, microneedling and laser vary by area and course." },
          { q: "Is there downtime?", a: "Most injectable treatments have little downtime, though minor swelling, redness or bruising can occur for a few days — more commonly with fillers. Peels, microneedling and laser can cause temporary redness or flaking. We avoid scheduling you right before a big event where possible." },
          { q: "What should I avoid afterwards?", a: "Stay upright for a few hours after Botox and avoid rubbing the area. Skip vigorous exercise, saunas, steam and alcohol for 24–48 hours. Protect your skin with SPF, especially after peels, microneedling or laser. We provide written aftercare for your specific treatment." },
          { q: "When will I see results?", a: "Botox begins in a few days and settles by around two weeks. Fillers show much of their effect immediately, then settle over one to two weeks. Regenerative and skin-quality treatments are the most gradual, building over weeks to months across a course." },
        ],
      },
      {
        id: "results-upkeep",
        title: "Results & upkeep",
        items: [
          { q: "How long do results last overall?", a: "It varies by treatment: Botox around 3–4 months, fillers roughly 6–18 months, Profhilo maintained 6-monthly after the initial two sessions, and regenerative courses building gradually. Your metabolism, the area and your lifestyle all play a part, so we plan upkeep individually." },
          { q: "Will I need top-ups?", a: "Usually, yes — these are maintenance treatments, not permanent ones. For Botox that's typically every 3–4 months; for fillers when the effect fades; for Profhilo and boosters as a periodic course. We plan a realistic, unhurried schedule at consultation." },
          { q: "Are mole, wart and tattoo removal permanent?", a: "Mole, wart and skin-tag removal aims to remove the lesion, though we always assess a mole carefully first and some can recur. Tattoo removal fades ink over multiple sessions spaced weeks apart; how completely it clears depends on the ink, its depth and colour, and complete clearance can't be guaranteed." },
          { q: "Can I combine treatments in Gurugram?", a: "Often, yes — for example Botox for movement, filler for volume and a booster or PRP for skin quality, staged sensibly. At your free consultation in Gurugram we build a combined plan in the right order and at conservative doses, so results look natural and cohesive." },
          { q: "How do I make my results last longer?", a: "Daily SPF, a sensible skincare routine, not smoking, staying hydrated and following your aftercare all help. Realistic, timely upkeep matters more than higher doses — steady maintenance keeps results looking natural over the long term." },
        ],
      },
    ],
  },
  {
    slug: "hair-regeneration",
    name: "Hair Regeneration",
    eyebrow: "Regenerative scalp therapy",
    headline: "Slow the shedding, thicken what you have, and treat the cause underneath.",
    intro: "Hair Regeneration at our Gurugram clinic is a doctor-assessed course of regenerative scalp treatments — PRP, GFC, exosomes, QR678 and microneedling — that use your own growth factors and signalling to strengthen existing follicles and improve density. It works best for early-to-moderate thinning where follicles are still alive, and it is not a hair transplant.",
    image: "/images/service-hair-regeneration.webp",
    imageAlt: "A regenerative scalp therapy session at Auresca Care",
    metaTitle: "Hair Regeneration in Gurugram — Auresca Care",
    metaDescription: "Regenerative scalp therapy in Gurugram — PRP, GFC, exosomes and QR678 to slow shedding and improve hair density. Doctor-assessed. Book a free consultation.",
    specs: [
      { icon: "clock", label: "Session time", value: "30–45 minutes" },
      { icon: "drop", label: "Format", value: "Injectable or microneedled" },
      { icon: "stethoscope", label: "Assessment", value: "Doctor-led, cause first" },
      { icon: "check", label: "Downtime", value: "Little to none" },
      { icon: "leaf", label: "Course", value: "4–6 monthly, then top-ups" },
      { icon: "sparkle", label: "Results", value: "Gradual over 3–6 months" },
    ],
    science: {
      title: "The science, in plain terms",
      body: [
        "Hair grows in cycles, and thinning usually means more follicles are slipping into their resting and shedding phase — often because of pattern hair loss (a genetic, hormone-linked sensitivity), a temporary stressor such as illness or postpartum change (telogen effluvium), or a nutritional deficiency. Regenerative scalp therapy does not create new follicles. What it does is deliver concentrated growth factors and signalling molecules to the follicles you still have, encouraging them to stay in the growth phase longer and produce thicker, healthier strands.",
        "The therapies differ mainly in where those growth factors come from. PRP uses your own blood: we draw a small sample, spin it to concentrate the platelets, and inject that platelet-rich plasma into the scalp, where the platelets release their natural growth factors. GFC is a growth-factor concentrate prepared from your blood with a focus on isolating specific factors. Exosomes are lab-prepared signalling vesicles that carry messenger molecules to the follicle. QR678 is a formulated blend of growth factors given as scalp injections. Microneedling creates controlled micro-channels that stimulate the scalp's own repair response and help topical actives absorb.",
        "Because these treatments act on living follicles, the honest limit is this: they can slow shedding, improve density and thicken existing hair, but they cannot regrow hair on a scalp that is completely bald or scarred, where the follicles are gone. That is why we assess the cause first — the best outcomes come from combining in-clinic therapy with treating the underlying reason for your hair loss, whether that is a medical cause, a deficiency, or genetic pattern loss that also benefits from prescribed topical or oral support.",
      ],
    },
    visit: {
      title: "What a visit involves",
      intro: "Every course begins with an assessment, not a needle. We want to know why your hair is thinning before we decide how to treat it.",
      steps: [
        { title: "Consultation & diagnosis", desc: "A doctor examines your scalp and hair pattern, reviews your history, and where needed suggests blood tests to check for deficiencies or a treatable medical cause. We identify whether this is pattern hair loss, telogen effluvium, or something else." },
        { title: "Your plan", desc: "We recommend a suitable therapy or combination, explain the likely course length, and set honest expectations about what regeneration can and cannot do for your particular stage of thinning. You receive a written quote before anything begins." },
        { title: "The treatment", desc: "For injectables we cleanse the scalp, apply numbing where wanted, and place a series of small injections across the thinning areas. Microneedling passes a fine-needle device over the scalp. A session takes about 30–45 minutes." },
        { title: "Review & upkeep", desc: "We track your density and shedding across the course and review progress at intervals. Once density stabilises, we move to maintenance top-ups to hold the gains, since results fade without upkeep." },
      ],
    },
    areas: {
      title: "The regeneration menu",
      eyebrow: "The menu",
      columnLabel: "Therapy",
      intro: "The right therapy depends on your diagnosis, your stage of thinning and your scalp — we match it to you at consultation rather than selling a single fix. Courses and top-ups below are typical ranges, not promises.",
      note: "All courses are doctor-assessed and depend on the cause and stage of your hair loss. Regenerative therapy suits early-to-moderate thinning with living follicles; it is not a hair transplant and cannot regrow hair on a bald or scarred scalp.",
      groups: [
        {
          title: "Regenerative injectables",
          rows: [
            { area: "PRP — Hair", sessions: "Course of 4–6, monthly" },
            { area: "GFC — Hair", sessions: "Course of 4–6, monthly" },
            { area: "Exosomes — Hair", sessions: "Course of 3–4, monthly" },
            { area: "QR678", sessions: "Course of 6–8, every 2–3 weeks" },
          ],
        },
        {
          title: "Support therapies",
          rows: [
            { area: "Microneedling — Hair", sessions: "Course of 4–6, every 2–4 weeks" },
          ],
        },
      ],
    },
    technology: {
      title: "How the therapies differ",
      intro: "Each option delivers growth factors to the follicle in a different way. Here is what sets them apart, without the marketing gloss.",
      points: [
        { title: "PRP — your own platelets", desc: "Platelet-rich plasma is concentrated from your own blood, so the growth factors are entirely yours. It is the most established regenerative option for hair and a sensible starting point for many early-to-moderate cases." },
        { title: "GFC — concentrated growth factors", desc: "A growth-factor concentrate also prepared from your blood, aiming for a higher, more consistent dose of the specific factors that support the follicle. Some people prefer it for its standardised preparation." },
        { title: "Exosomes — pure signalling", desc: "Lab-prepared vesicles that carry messenger molecules to the follicle rather than growth factors from your own blood. Often used to add a signalling boost, sometimes alongside microneedling." },
        { title: "QR678 & microneedling", desc: "QR678 is a formulated blend of growth factors given as scalp injections over a defined course. Microneedling stimulates the scalp's repair response and improves absorption of topical actives, and pairs well with the injectables above." },
      ],
    },
    suitability: {
      title: "Is it right for you?",
      goodTitle: "Often a good fit",
      good: [
        "Early-to-moderate thinning with follicles still present",
        "Widening parting or reducing density rather than fully bald patches",
        "Pattern hair loss you want to slow and support alongside medical treatment",
        "Recovery from telogen effluvium once the trigger is addressed",
        "Thinning after a corrected deficiency, to speed the rebound",
        "Anyone wanting a non-surgical option and realistic about upkeep",
      ],
      waitTitle: "Not the right time",
      wait: [
        "Completely bald or scarred areas where follicles are gone — regeneration cannot help here",
        "An active scalp infection or inflammation, until it settles",
        "An untreated underlying cause we haven't yet identified or corrected",
        "Certain blood or clotting conditions, or medication that affects this — tell us at consultation",
        "Pregnancy or breastfeeding, where we defer elective treatment",
        "Expecting a one-session cure or a transplant-level result — that is not what this is",
      ],
    },
    care: {
      title: "Before & after care",
      intro: "Simple steps help each session work and keep the scalp comfortable. We give you written aftercare on the day.",
      beforeTitle: "Before your session",
      before: [
        "Come with clean hair and a product-free scalp",
        "Stay well hydrated, especially before blood-based therapies like PRP or GFC",
        "Avoid alcohol for 24 hours beforehand",
        "Tell us about blood thinners, supplements and any recent illness",
        "Eat normally before PRP or GFC so your blood draw is comfortable",
      ],
      afterTitle: "After your session",
      after: [
        "Leave the scalp unwashed for the rest of the day",
        "Skip the gym, sauna, steam and swimming for 24–48 hours",
        "Avoid harsh styling products and hair colour for a couple of days",
        "Mild tenderness, redness or small bumps are normal and settle within a day or two",
        "Keep to your course dates — consistency matters more than any single session",
      ],
    },
    results: {
      title: "What results to expect",
      lead: "Regeneration is gradual and needs upkeep. Here is an honest picture of the timeline.",
      body: [
        "You will not see change overnight. In the first weeks the goal is usually reduced shedding, which many people notice before any visible thickening. New growth and improved density build slowly as the follicles respond, typically over three to six months across the course.",
        "How much you gain depends on your stage of thinning, the cause, and how consistently you complete the course and any prescribed support. Regeneration holds best when it is part of a plan that also treats the underlying reason for your hair loss — and because it acts on living follicles, results fade if you stop, which is why maintenance top-ups matter. We show you your own progress over time; we do not present other people's before-and-after photos as a promise of your result.",
      ],
      points: [
        { title: "Weeks 2–6", desc: "Shedding often begins to slow. This is usually the first sign the follicles are responding, before any visible thickening." },
        { title: "Months 2–3", desc: "Existing hair starts to feel stronger and the scalp less visible through the parting, though changes are subtle at this stage." },
        { title: "Months 3–6", desc: "Density and thickness improve most noticeably here, as the course takes full effect. This is when most people judge their result." },
        { title: "Ongoing", desc: "Maintenance top-ups, typically every 6–9 months, hold the gains. Without upkeep, thinning gradually returns." },
      ],
    },
    faqGroups: [
      {
        id: "basics",
        title: "The basics",
        items: [
          { q: "Does PRP work for hair loss?", a: "For many people with early-to-moderate thinning and living follicles, yes — PRP can slow shedding, thicken existing hair and improve density. It works less well, or not at all, on completely bald or scarred areas where the follicle is gone. It is a supportive therapy, not a cure, and it is not a hair transplant." },
          { q: "Is hair regeneration a hair transplant?", a: "No. A transplant surgically moves follicles into bald areas. Regenerative therapy uses growth factors and signalling to strengthen the follicles you already have. If you have significant bald areas, we will tell you honestly and can discuss whether a transplant is more appropriate." },
          { q: "Where in Gurugram is the clinic?", a: "Our clinic is in Gurugram, Haryana. The first step for any hair concern is a free consultation, where a doctor assesses your scalp and the cause of your thinning before recommending anything." },
          { q: "Is regenerative scalp therapy safe?", a: "PRP and GFC use your own blood, so the risk of reaction is low. All the therapies are done in a clinical setting by trained staff. Side effects are usually mild — tenderness, redness or small bumps that settle quickly. We screen your suitability at consultation." },
          { q: "Will I need to shave my head?", a: "No. These treatments are delivered across the scalp between existing hairs and do not require shaving." },
        ],
      },
      {
        id: "how-it-works",
        title: "How it works & sessions",
        items: [
          { q: "How many PRP sessions are needed for hair?", a: "Typically a course of four to six sessions about a month apart, followed by maintenance top-ups roughly every six to nine months. The exact number depends on your stage of thinning and the cause, which we assess first." },
          { q: "How does PRP for hair actually work?", a: "We draw a small sample of your blood, spin it to concentrate the platelets, and inject that platelet-rich plasma into the scalp. The platelets release growth factors that encourage your existing follicles to stay in the growth phase and produce thicker strands." },
          { q: "How long does a session take?", a: "Around 30 to 45 minutes, including preparation. For PRP and GFC there is a short blood draw beforehand. You can usually return to your day straight after." },
          { q: "Is there any downtime?", a: "Very little. You may have mild tenderness, redness or small bumps on the scalp for a day or two. We ask you to avoid washing your hair, the gym, sauna and swimming for 24 to 48 hours." },
          { q: "Why do results take so long to show?", a: "Because hair grows in cycles and the therapy works by shifting follicles back into a healthier growth phase, change is gradual. Reduced shedding often comes first, with visible density building over three to six months." },
        ],
      },
      {
        id: "which-therapy",
        title: "Which therapy is right",
        items: [
          { q: "PRP vs GFC vs exosomes for hair — which is better?", a: "There is no single best option; it depends on your diagnosis and scalp. PRP uses your own platelet growth factors and is the most established. GFC is a more concentrated growth-factor preparation from your blood. Exosomes deliver lab-prepared signalling molecules and are often used to add a boost. We match the therapy to you rather than pushing one." },
          { q: "What is QR678 treatment?", a: "QR678 is a formulated blend of growth factors given as a course of scalp injections, designed to support the follicle. It is usually delivered over several sessions a couple of weeks apart. Whether it suits you depends on your cause and stage of hair loss." },
          { q: "What does microneedling do for hair?", a: "Microneedling passes a fine-needle device over the scalp to create controlled micro-channels. This stimulates the scalp's own repair response and improves absorption of topical actives. It is often combined with injectable regenerative therapies rather than used alone." },
          { q: "Can I combine therapies?", a: "Often, yes. Microneedling pairs well with injectables, and regeneration works best alongside treating the underlying cause with prescribed topical or oral support. We design any combination at consultation based on your diagnosis." },
          { q: "How do you decide which one I need?", a: "A doctor examines your scalp, reviews your history and, where useful, blood tests, to identify the cause and stage of your thinning. The therapy is chosen from that assessment — cause first, then treatment." },
        ],
      },
      {
        id: "safety",
        title: "Safety & suitability",
        items: [
          { q: "Is PRP for hair painful?", a: "Most people find it very manageable. The scalp can be sensitive, so we can apply numbing beforehand, and the injections are quick. Any tenderness afterwards is usually mild and short-lived." },
          { q: "Who should not have regenerative scalp therapy?", a: "It is not suitable if you have completely bald or scarred areas where follicles are gone, an active scalp infection, certain blood or clotting conditions, or during pregnancy and breastfeeding. We also want to identify and address the underlying cause first. We screen all of this at consultation." },
          { q: "Are there side effects?", a: "The common ones are mild and temporary — scalp tenderness, redness, slight swelling or small bumps that settle within a day or two. Because PRP and GFC use your own blood, the risk of allergic reaction is low. We discuss your specific risks before you start." },
          { q: "Do I need any tests first?", a: "Sometimes. If we suspect a deficiency or a medical cause behind your thinning, blood tests help us treat the root problem, not just the symptom. Treating the cause is what makes the regenerative course work better." },
          { q: "Can it make my hair fall out?", a: "No, the therapy does not cause hair loss. Some people notice normal ongoing shedding early in the course before improvement begins — this is the existing hair cycle, not a reaction to treatment." },
        ],
      },
      {
        id: "results-upkeep",
        title: "Results & upkeep",
        items: [
          { q: "How much does PRP hair treatment cost in Gurugram?", a: "Cost depends on which therapy you need and how many sessions your course involves, so we do not quote a flat figure. After your free consultation in Gurugram we give you a clear written quote for your specific plan, with no obligation to proceed." },
          { q: "Are the results permanent?", a: "No, and we will not claim otherwise. Regeneration acts on living follicles and the effect fades if you stop, especially with pattern hair loss, which is progressive. Maintenance top-ups, typically every six to nine months, hold the gains." },
          { q: "How much regrowth can I expect?", a: "Honestly, it varies. Many people see reduced shedding, thicker existing hair and improved density over three to six months, but there is no guaranteed amount of regrowth, and none on areas where follicles are already lost. We set realistic expectations for your stage at consultation." },
          { q: "What happens if I stop the top-ups?", a: "The improvements gradually reverse over time, because the underlying cause of thinning is still present. Regeneration manages hair loss; it does not switch it off permanently, which is why upkeep matters." },
          { q: "Will you show me before-and-after photos as proof?", a: "We track your own progress across the course so you can see your response over time. We do not present other people's before-and-after images as a promise of what you will get, because every scalp and cause is different." },
        ],
      },
    ],
  },
];

/** Detail page for a category slug, when one has been written. */
export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}

/** Slugs that have a detail page — used to decide what to link to. */
export const detailSlugs = new Set(serviceDetails.map((s) => s.slug));
