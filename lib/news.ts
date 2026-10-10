export type Story = {
  slug: string
  category: string
  title: string
  summary: string
  time: string
  datetime: string
  author: string
  body: string[]
}

export type Section = {
  slug: string
  title: string
  intro: string
  stories: Story[]
}

export type StoryWithSection = Story & { section: string; sectionTitle: string }

export const sections: Section[] = [
  {
    slug: 'news',
    title: 'News',
    intro: 'The stories shaping Kenya today, reported with clarity and context.',
    stories: [
      {
        slug: 'government-outlines-new-plan-essential-services',
        category: 'National',
        title: 'Government outlines new plan to ease pressure on essential services',
        summary: 'Officials say the phased plan will focus on access, accountability and measurable results.',
        time: '18 min ago',
        datetime: '2026-10-10T09:42:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'The national government has published a phased plan to ease pressure on essential services, promising clearer timelines for the households and businesses that depend on them.',
          'Officials say the programme will prioritise access, accountability and measurable results, with each phase reviewed publicly before the next one begins.',
          'The announcement follows weeks of complaints about delays at service centres across Nairobi and the counties, and comes as regulators prepare to publish performance dashboards for every ministry.',
        ],
      },
      {
        slug: 'county-leaders-call-faster-response-rains',
        category: 'Counties',
        title: 'County leaders call for faster response as rains change travel plans',
        summary: 'Residents across western counties are preparing for a wetter than usual week.',
        time: '42 min ago',
        datetime: '2026-10-10T09:18:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'County leaders have called for a faster emergency response as changing rain patterns disrupt travel across western Kenya.',
          'Residents in several counties are preparing for a wetter than usual week, with roads and markets in low-lying areas at risk of flooding.',
          'Governors meeting in Nakuru said early warning systems must reach sub-counties directly, rather than waiting for national alerts to trickle down.',
        ],
      },
      {
        slug: 'what-readers-should-know-latest-public-advisory',
        category: 'Public interest',
        title: 'What readers should know about the latest public advisory',
        summary: 'A plain-language guide to the decisions and dates that affect households this week.',
        time: '1 hr ago',
        datetime: '2026-10-10T09:00:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'A new public advisory issued this week affects households across the country, and the details matter more than the headlines suggest.',
          'In plain terms: the advisory sets out decisions and dates that will affect water access, transport fares and school schedules in the coming month.',
          'We have broken down each point into questions and answers so readers can check what applies to their county without reading the full gazette notice.',
        ],
      },
      {
        slug: 'five-questions-behind-headline-dominating-morning',
        category: 'Explainer',
        title: 'Five questions behind the headline dominating the morning',
        summary: 'We break down the facts, the context and what happens next.',
        time: '2 hrs ago',
        datetime: '2026-10-10T08:00:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'The headline dominating the morning raises five questions that readers are asking in our newsroom and on our social channels.',
          'First, what changed overnight? Second, who is affected, and where? Third, what happens next week? Fourth, what does it cost households? Fifth, who is accountable for the outcome?',
          'We answer each question with the reporting we have on record, and flag where the facts are still unclear.',
        ],
      },
      {
        slug: 'sgr-phase-two-review-talks-enter-second-day',
        category: 'Kenya',
        title: 'SGR phase two review talks enter second day',
        summary: 'Transport officials say the discussions cover routes, fares and safety standards.',
        time: '3 hrs ago',
        datetime: '2026-10-10T07:00:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'Review talks on the second phase of the standard gauge railway entered a second day, with transport officials saying the discussions cover routes, fares and safety standards.',
          'Delegates are examining how the new routes will serve counties that currently rely on road transport for most of their cargo.',
          'A briefing for journalists is expected later this week, according to officials familiar with the schedule.',
        ],
      },
      {
        slug: 'meteorological-department-issues-weekend-advisory',
        category: 'Weather',
        title: 'Meteorological department issues weekend advisory',
        summary: 'Light showers are expected over the highlands through Sunday evening.',
        time: '5 hrs ago',
        datetime: '2026-10-10T05:00:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'The Kenya Meteorological Department has issued a weekend advisory, forecasting light showers over the highlands through Sunday evening.',
          'Residents in upland counties are advised to watch for slippery roads and localised flooding in low-lying areas.',
          'The department said the rains should ease by Monday morning, though conditions may change quickly in the lake basin.',
        ],
      },
      {
        slug: 'kenya-steps-up-ebola-surveillance-after-confirmed-case',
        category: 'Health',
        title: 'Kenya steps up Ebola surveillance after confirmed case',
        summary: 'Health officials are tracing contacts and monitoring suspected cases.',
        time: '31 min ago',
        datetime: '2026-10-10T09:29:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'Health officials have stepped up surveillance after a confirmed Ebola case was reported this week, with contact tracing underway in the affected county.',
          'The ministry says the case was detected early and isolation protocols are being followed at designated treatment centres.',
          'Residents are advised to report symptoms early and to follow guidance from county health teams, which are holding briefings at sub-county offices.',
        ],
      },
      {
        slug: 'what-new-cbd-routes-mean-for-your-daily-commute',
        category: 'Nairobi',
        title: 'What the new CBD routes mean for your daily commute',
        summary: 'Designated drop-off zones and a phased timeline are now in effect for matatu operators.',
        time: '26 min ago',
        datetime: '2026-10-10T09:34:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'The new CBD route plan sets out designated drop-off zones and a phased timeline for matatu operators, with a review planned after the first three months.',
          'For commuters, the changes mean shorter walks to designated stops and clearer signage, but also adjusted pickup points during the transition.',
          'City Hall says the plan was agreed with sacco officials after weeks of talks, and enforcement will begin with a grace period for operators.',
        ],
      },
      {
        slug: 'explainer-how-county-revenue-is-shared',
        category: 'Explainer',
        title: 'Explainer: how county revenue is shared',
        summary: 'The formula weighs population, area, poverty and fiscal effort. Here is how it works.',
        time: '2 hrs ago',
        datetime: '2026-10-10T08:30:00+03:00',
        author: 'Dispatch Newsroom',
        body: [
          'County revenue sharing follows a formula set by the Commission on Revenue Allocation, which weighs population, area, poverty and fiscal effort.',
          'In simple terms, counties with more people receive a larger share, but adjustments exist for sparsely populated counties with high delivery costs.',
          'This explainer walks through the formula step by step, using the latest audited figures from the national treasury.',
        ],
      },
    ],
  },
  {
    slug: 'politics',
    title: 'Politics',
    intro: 'Power, policy and the people making decisions across the country.',
    stories: [
      {
        slug: 'uda-defections-reshape-race-ahead-of-2027',
        category: 'Politics',
        title: 'UDA defections reshape the race ahead of 2027',
        summary: 'Party realignments are accelerating as governors and MPs weigh new alliances.',
        time: '25 min ago',
        datetime: '2026-10-10T09:35:00+03:00',
        author: 'Politics Desk',
        body: [
          'A wave of defections has reshaped the political race ahead of 2027, as governors and MPs weigh new alliances in several counties.',
          'Party officials say the realignments are accelerating, with negotiations now focused on the Rift Valley and the coast.',
          'Analysts caution that today’s alliances rarely survive the first budget test, and that voters will judge them on delivery rather than announcements.',
        ],
      },
      {
        slug: 'leaders-trade-proposals-budget-conversation-moves-counties',
        category: 'Politics',
        title: 'Leaders trade proposals as the budget conversation moves counties',
        summary: 'The next phase of negotiations will test how much room local governments have.',
        time: '1 hr ago',
        datetime: '2026-10-10T09:00:00+03:00',
        author: 'Politics Desk',
        body: [
          'The budget conversation has moved to the counties, where leaders are trading proposals over revenue allocation and spending priorities.',
          'The next phase of negotiations will test how much room local governments have to raise their own revenue without new taxes.',
          'Several governors have signalled they will publish county-level budget papers for public comment before the next fiscal year.',
        ],
      },
      {
        slug: 'why-coalition-arithmetic-is-already-back-in-conversation',
        category: 'Analysis',
        title: 'Why coalition arithmetic is already back in the conversation',
        summary: 'The alliances taking shape now may define the political map later.',
        time: '3 hrs ago',
        datetime: '2026-10-10T07:00:00+03:00',
        author: 'Politics Desk',
        body: [
          'Coalition arithmetic is back in the conversation, and the alliances taking shape now may define the political map later.',
          'The maths is straightforward: no single party holds enough seats to govern alone in the counties that matter most.',
          'That reality is pushing leaders towards deals that would have been unthinkable a year ago, according to veteran observers of Kenyan politics.',
        ],
      },
      {
        slug: 'case-for-more-useful-political-disagreement',
        category: 'Opinion',
        title: 'The case for more useful political disagreement',
        summary: 'Good scrutiny is not noise. It is how public decisions get better.',
        time: '5 hrs ago',
        datetime: '2026-10-10T05:00:00+03:00',
        author: 'Politics Desk',
        body: [
          'Good scrutiny is not noise. It is how public decisions get better, and Kenya’s political class needs more of it.',
          'The case for more useful political disagreement starts with facts: published records, named officials and clear timelines.',
          'When disagreement is reduced to slogans, voters lose the ability to hold anyone accountable. This column argues for a higher standard.',
        ],
      },
      {
        slug: 'iebc-publishes-new-timetable-for-party-primaries',
        category: 'Elections',
        title: 'IEBC publishes new timetable for party primaries',
        summary: 'The commission says the schedule gives parties more time to resolve disputes.',
        time: '7 hrs ago',
        datetime: '2026-10-10T03:00:00+03:00',
        author: 'Politics Desk',
        body: [
          'The IEBC has published a new timetable for party primaries, giving parties more time to resolve disputes before the next election cycle.',
          'The schedule sets out dates for nomination, appeals and the final gazette of candidates across all constituencies.',
          'Party officials are now required to submit their lists within the new windows, with penalties for late submissions.',
        ],
      },
    ],
  },
  {
    slug: 'business',
    title: 'Business',
    intro: 'Markets, enterprise and the economy behind everyday life.',
    stories: [
      {
        slug: 'south-sudan-plans-inland-depot-naivasha-sez',
        category: 'Business',
        title: 'South Sudan plans inland depot at Naivasha SEZ',
        summary: 'The project aims to ease pressure on the Port of Mombasa and create new trade routes.',
        time: '35 min ago',
        datetime: '2026-10-10T09:25:00+03:00',
        author: 'Business Desk',
        body: [
          'South Sudan plans an inland depot at the Naivasha Special Economic Zone, a project that aims to ease pressure on the Port of Mombasa.',
          'The depot would create new trade routes for cargo moving between the two countries, cutting transit times for traders on both sides of the border.',
          'Officials say the agreement follows months of talks and could be operational within the next two years.',
        ],
      },
      {
        slug: 'small-traders-ask-clarity-new-licensing-fees',
        category: 'Enterprise',
        title: 'Small traders ask for clarity on new licensing fees',
        summary: 'Associations say unclear rollout plans are leaving businesses unsure what they owe.',
        time: '2 hrs ago',
        datetime: '2026-10-10T08:00:00+03:00',
        author: 'Business Desk',
        body: [
          'Small traders are asking for clarity on new licensing fees, saying the rollout has left many hawkers and shop owners unsure what they owe and when.',
          'Associations representing traders in Nairobi and Mombasa have written to City Hall requesting a published schedule of charges.',
          'Officials say the fees fund market infrastructure, but traders argue the communication has been unclear and the deadlines too tight.',
        ],
      },
      {
        slug: 'farmers-prepare-short-rains-planting-season',
        category: 'Agriculture',
        title: 'Farmers prepare for the short rains planting season',
        summary: 'Input suppliers and growers are watching weather updates closely.',
        time: '4 hrs ago',
        datetime: '2026-10-10T06:00:00+03:00',
        author: 'Business Desk',
        body: [
          'Farmers across the Rift Valley and the lake basin are preparing for the short rains planting season, watching weather updates closely.',
          'Input suppliers say seed and fertiliser stocks are adequate, though prices remain higher than last year in some counties.',
          'Agricultural officers are advising farmers to plant early where soil moisture allows, and to use drought-resistant varieties in marginal areas.',
        ],
      },
      {
        slug: 'mobile-money-agents-report-steady-weekend-volumes',
        category: 'Money',
        title: 'Mobile money agents report steady weekend volumes',
        summary: 'Operators say customer habits are shifting as digital payments expand.',
        time: '6 hrs ago',
        datetime: '2026-10-10T04:00:00+03:00',
        author: 'Business Desk',
        body: [
          'Mobile money agents report steady weekend volumes, saying customer habits are shifting as digital payments expand into smaller towns.',
          'Operators say the growth is strongest in counties where agent networks have expanded over the past year.',
          'The trend is encouraging for the treasury, which has been tracking the shift from cash to digital transactions in its quarterly reports.',
        ],
      },
      {
        slug: 'nairobi-bourse-closes-higher-third-straight-week',
        category: 'Markets',
        title: 'Nairobi bourse closes higher for third straight week',
        summary: 'Banking and manufacturing stocks led gains as investors digested the budget report.',
        time: '8 hrs ago',
        datetime: '2026-10-10T02:00:00+03:00',
        author: 'Business Desk',
        body: [
          'The Nairobi bourse closed higher for a third straight week, with banking and manufacturing stocks leading the gains.',
          'Investors digested the latest budget report, and dealers said trading volumes improved in the final session on Friday.',
          'Analysts expect the momentum to hold in the short term, though they warn that global commodity prices remain a risk.',
        ],
      },
    ],
  },
  {
    slug: 'sports',
    title: 'Sports',
    intro: 'Scores, stories and the people behind Kenyan sport.',
    stories: [
      {
        slug: 'harambee-stars-name-squad-weekend-friendly',
        category: 'Football',
        title: 'Harambee Stars name squad for weekend friendly',
        summary: 'The head coach retains eight players from the last camp as new faces earn call-ups.',
        time: '22 min ago',
        datetime: '2026-10-10T09:38:00+03:00',
        author: 'Sports Desk',
        body: [
          'The Harambee Stars have named their squad for the weekend friendly, with the head coach retaining eight players from the last camp.',
          'New faces earn call-ups from the local league, as the coaching staff looks to test depth in the midfield and attack.',
          'The match will be played at the national stadium, with gates opening two hours before kick-off.',
        ],
      },
      {
        slug: 'kipchoge-hints-one-more-marathon-before-retirement',
        category: 'Athletics',
        title: 'Kipchoge hints at one more marathon before retirement',
        summary: 'The marathon legend says he will decide after the autumn road season.',
        time: '1 hr ago',
        datetime: '2026-10-10T09:00:00+03:00',
        author: 'Sports Desk',
        body: [
          'Eliud Kipchoge has hinted at one more marathon before retirement, saying he will decide after the autumn road season.',
          'The marathon legend said he is listening to his body and consulting with his team before making a final announcement.',
          'Fans in Kenya and beyond have been celebrating his career, which has redefined what is possible in distance running.',
        ],
      },
      {
        slug: 'shujaa-wazee-fall-short-tight-quarterfinal',
        category: 'Rugby',
        title: 'Shujaa Wazee fall short in tight quarterfinal',
        summary: 'A late try from the visitors sealed a 24–19 defeat in Nairobi.',
        time: '2 hrs ago',
        datetime: '2026-10-10T08:00:00+03:00',
        author: 'Sports Desk',
        body: [
          'The Shujaa Wazee fell short in a tight quarterfinal, with a late try from the visitors sealing a 24–19 defeat in Nairobi.',
          'The home side led at half-time but conceded twice in the final quarter, ending their run in the competition.',
          'The coach praised the squad’s effort and promised a review of the defensive sets before the next fixture.',
        ],
      },
      {
        slug: 'premier-league-clubs-agree-new-broadcast-deal',
        category: 'Football',
        title: 'Premier League clubs agree new broadcast deal',
        summary: 'Clubs say the three-year agreement will fund grassroots academies across the counties.',
        time: '4 hrs ago',
        datetime: '2026-10-10T06:00:00+03:00',
        author: 'Sports Desk',
        body: [
          'Premier League clubs have agreed a new broadcast deal, with the three-year agreement set to fund grassroots academies across the counties.',
          'The clubs said the deal improves coverage of matches and increases revenue sharing for smaller teams.',
          'The league’s chief executive described the agreement as a milestone for the sport’s commercial growth in the region.',
        ],
      },
      {
        slug: 'kenya-targets-top-ten-finish-2028-games',
        category: 'Olympics',
        title: 'Kenya targets top ten finish at 2028 Games',
        summary: 'The national Olympic committee unveils a four-year funding plan for team sports.',
        time: '6 hrs ago',
        datetime: '2026-10-10T04:00:00+03:00',
        author: 'Sports Desk',
        body: [
          'Kenya is targeting a top ten finish at the 2028 Games, with the national Olympic committee unveiling a four-year funding plan for team sports.',
          'The plan includes full-time camps for athletics, rugby and hockey, plus scholarships for young athletes from the counties.',
          'Officials say the target is ambitious but achievable if funding is released on schedule.',
        ],
      },
    ],
  },
  {
    slug: 'tech',
    title: 'Tech',
    intro: 'Innovation, startups and the digital economy reshaping Kenya.',
    stories: [
      {
        slug: 'nairobi-fintech-raises-series-a-expand-lending',
        category: 'Startups',
        title: 'Nairobi fintech raises Series A to expand lending',
        summary: 'The platform says the funds will deepen credit access for small traders.',
        time: '19 min ago',
        datetime: '2026-10-10T09:41:00+03:00',
        author: 'Tech Desk',
        body: [
          'A Nairobi fintech has raised Series A funding to expand lending, saying the capital will deepen credit access for small traders.',
          'The platform uses mobile transaction history to assess creditworthiness, allowing traders without bank statements to borrow.',
          'The round was led by regional investors, with participation from the company’s existing backers.',
        ],
      },
      {
        slug: 'mobile-money-fees-drop-small-transfers',
        category: 'Mobile',
        title: 'Mobile money fees drop for small transfers',
        summary: 'Operators cut transaction costs on transfers under one thousand shillings.',
        time: '1 hr ago',
        datetime: '2026-10-10T09:00:00+03:00',
        author: 'Tech Desk',
        body: [
          'Mobile money fees have dropped for small transfers, after operators cut transaction costs on payments under one thousand shillings.',
          'The change affects millions of customers who use mobile money for daily purchases and remittances to rural families.',
          'Consumer groups welcomed the move but said they will watch for hidden charges on cash-out transactions.',
        ],
      },
      {
        slug: 'data-protection-office-publishes-new-guidelines',
        category: 'Policy',
        title: 'Data protection office publishes new guidelines',
        summary: 'The guidelines set out how firms must handle customer consent and breaches.',
        time: '3 hrs ago',
        datetime: '2026-10-10T07:00:00+03:00',
        author: 'Tech Desk',
        body: [
          'The data protection office has published new guidelines, setting out how firms must handle customer consent and breaches.',
          'The guidelines require companies to notify affected customers within 72 hours of a confirmed breach.',
          'Businesses have been given a transition period to update their privacy policies and train staff on the new rules.',
        ],
      },
      {
        slug: 'rural-counties-get-new-fibre-optic-links',
        category: 'Connectivity',
        title: 'Rural counties get new fibre optic links',
        summary: 'The project connects 14 sub-counties to the national broadband backbone.',
        time: '5 hrs ago',
        datetime: '2026-10-10T05:00:00+03:00',
        author: 'Tech Desk',
        body: [
          'Rural counties are getting new fibre optic links, connecting 14 sub-counties to the national broadband backbone.',
          'The project is expected to lower data costs and improve reliability for schools, clinics and businesses in the areas.',
          'County officials said the connections will also support digital government services that currently depend on slow satellite links.',
        ],
      },
      {
        slug: 'local-developers-launch-crop-insurance-app',
        category: 'Innovation',
        title: 'Local developers launch crop insurance app',
        summary: 'Farmers can insure against drought using satellite rainfall data.',
        time: '7 hrs ago',
        datetime: '2026-10-10T03:00:00+03:00',
        author: 'Tech Desk',
        body: [
          'Local developers have launched a crop insurance app that lets farmers insure against drought using satellite rainfall data.',
          'The app calculates payouts automatically when rainfall falls below the threshold for a farmer’s location.',
          'Pilot counties in the Rift Valley signed up first, with plans to expand nationally after the short rains season.',
        ],
      },
    ],
  },
  {
    slug: 'opinion',
    title: 'Opinion',
    intro: 'Editorials, columns and arguments from the Dispatch newsroom.',
    stories: [
      {
        slug: 'county-budgets-must-put-services-before-ceremony',
        category: 'Editorial',
        title: 'County budgets must put services before ceremony',
        summary: 'Residents will judge the new fiscal year by what reaches their doorstep.',
        time: '31 min ago',
        datetime: '2026-10-10T09:29:00+03:00',
        author: 'Opinion Desk',
        body: [
          'County budgets must put services before ceremony. Residents will judge the new fiscal year by what reaches their doorstep.',
          'Too often, the headline numbers are celebrated while clinics, roads and water projects wait for the next disbursement.',
          'The test for every county assembly is simple: does the budget fund the services people can actually feel?',
        ],
      },
      {
        slug: 'maths-of-coalition-politics-is-changing',
        category: 'Columnist',
        title: 'The maths of coalition politics is changing',
        summary: 'Alliances built on convenience rarely survive the first budget test.',
        time: '2 hrs ago',
        datetime: '2026-10-10T08:00:00+03:00',
        author: 'Opinion Desk',
        body: [
          'The maths of coalition politics is changing, and alliances built on convenience rarely survive the first budget test.',
          'When the numbers no longer add up, leaders discover principles they had forgotten during the campaign trail.',
          'Voters should watch the votes in the county assemblies, where the real arithmetic of Kenyan politics is settled.',
        ],
      },
      {
        slug: 'why-local-media-still-matters-digital-age',
        category: 'Analysis',
        title: 'Why local media still matters in a digital age',
        summary: 'Community newsrooms remain the first draft of county history.',
        time: '4 hrs ago',
        datetime: '2026-10-10T06:00:00+03:00',
        author: 'Opinion Desk',
        body: [
          'Why local media still matters in a digital age: community newsrooms remain the first draft of county history.',
          'National outlets parachute in for the big stories, but it is the local reporter who records what a new road means to a market town.',
          'Supporting local journalism is not nostalgia. It is how accountability survives between elections.',
        ],
      },
      {
        slug: 'public-transport-needs-fare-framework-not-slogans',
        category: 'Guest',
        title: 'Public transport needs a fare framework, not slogans',
        summary: 'A clear formula would end the weekly standoffs between operators and city officials.',
        time: '6 hrs ago',
        datetime: '2026-10-10T04:00:00+03:00',
        author: 'Opinion Desk',
        body: [
          'Public transport needs a fare framework, not slogans. A clear formula would end the weekly standoffs between operators and city officials.',
          'The current system leaves commuters guessing, and leaves operators negotiating at the worst possible moments.',
          'A published formula, reviewed annually, would give both sides certainty and give commuters a fair deal.',
        ],
      },
      {
        slug: 'short-rains-are-planning-test-not-just-weather',
        category: 'Editorial',
        title: 'The short rains are a planning test, not just weather',
        summary: 'Every county that prepares well today avoids a crisis tomorrow.',
        time: '8 hrs ago',
        datetime: '2026-10-10T02:00:00+03:00',
        author: 'Opinion Desk',
        body: [
          'The short rains are a planning test, not just weather. Every county that prepares well today avoids a crisis tomorrow.',
          'Flood drainage, early warning and market access are decisions made months before the first drops fall.',
          'This is the season when counties show whether their plans were written on paper or built into the budget.',
        ],
      },
    ],
  },
  {
    slug: 'lifestyle',
    title: 'Lifestyle',
    intro: 'Food, travel, culture and the way Kenya lives.',
    stories: [
      {
        slug: 'nairobis-brunch-scene-keeps-growing',
        category: 'Food',
        title: 'Nairobi’s brunch scene keeps growing',
        summary: 'From Westlands to South B, cafés are betting on slow mornings.',
        time: '26 min ago',
        datetime: '2026-10-10T09:34:00+03:00',
        author: 'Lifestyle Desk',
        body: [
          'Nairobi’s brunch scene keeps growing, from Westlands to South B, as cafés bet on slow mornings and strong coffee.',
          'The new wave of brunch spots is rewriting the city’s weekend routine, one plate at a time.',
          'We visited three neighbourhoods to see what the boom means for the city’s food culture.',
        ],
      },
      {
        slug: 'five-lakeside-escapes-long-rains',
        category: 'Travel',
        title: 'Five lakeside escapes for the long rains',
        summary: 'The coast and the Rift Valley both reward travellers who pack a light jacket.',
        time: '1 hr ago',
        datetime: '2026-10-10T09:00:00+03:00',
        author: 'Lifestyle Desk',
        body: [
          'Five lakeside escapes for the long rains: the coast and the Rift Valley both reward travellers who pack a light jacket.',
          'From Naivasha to Diani, these destinations offer quiet mornings and dramatic skies when the showers pass.',
          'Our picks balance comfort with adventure, and all are reachable within a day’s drive of the capital.',
        ],
      },
      {
        slug: 'gallery-season-opens-three-new-shows',
        category: 'Culture',
        title: 'Gallery season opens with three new shows',
        summary: 'Contemporary artists from the counties take over the city’s exhibition halls.',
        time: '3 hrs ago',
        datetime: '2026-10-10T07:00:00+03:00',
        author: 'Lifestyle Desk',
        body: [
          'Gallery season opens with three new shows, as contemporary artists from the counties take over the city’s exhibition halls.',
          'The exhibitions span painting, photography and sculpture, with a strong focus on work by women artists this year.',
          'Entry is free on the opening weekend, and several galleries are hosting artist talks through the month.',
        ],
      },
      {
        slug: 'rise-of-early-morning-running-club',
        category: 'Wellness',
        title: 'The rise of the early-morning running club',
        summary: 'Organised runs are reshaping how the city starts its day.',
        time: '5 hrs ago',
        datetime: '2026-10-10T05:00:00+03:00',
        author: 'Lifestyle Desk',
        body: [
          'The rise of the early-morning running club is reshaping how the city starts its day.',
          'Organised runs now gather at dawn in Uhuru Park and the Karura Forest, drawing everyone from first-time joggers to marathon veterans.',
          'Coaches say the clubs are building a culture of consistency, and the city’s streets are noticeably quieter before sunrise.',
        ],
      },
      {
        slug: 'sukuma-wiki-gets-gourmet-makeover',
        category: 'Food',
        title: 'Sukuma wiki gets a gourmet makeover',
        summary: 'Chefs across the city are reimagining the humble greens for modern palates.',
        time: '7 hrs ago',
        datetime: '2026-10-10T03:00:00+03:00',
        author: 'Lifestyle Desk',
        body: [
          'Sukuma wiki gets a gourmet makeover, as chefs across the city reimagine the humble greens for modern palates.',
          'From braised sukuma with coconut to crispy leaves served as a side, the dish is finding new life on restaurant menus.',
          'The trend is a reminder that Kenya’s food story starts in the kitchen, not the imported cookbook.',
        ],
      },
    ],
  },
  {
    slug: 'video',
    title: 'Video',
    intro: 'Documentaries, interviews and explainers from the Dispatch desk.',
    stories: [
      {
        slug: 'inside-flower-farms-naivasha',
        category: 'Documentary',
        title: 'Inside the flower farms of Naivasha',
        summary: 'A 12-minute film follows a stem from the greenhouse to the auction house.',
        time: '17 min ago',
        datetime: '2026-10-10T09:43:00+03:00',
        author: 'Video Desk',
        body: [
          'Inside the flower farms of Naivasha: a 12-minute film follows a stem from the greenhouse to the auction house.',
          'The documentary shows the work behind Kenya’s flower exports, which supply markets across Europe and beyond.',
          'Watch the full film on our video page, with subtitles available in English and Swahili.',
        ],
      },
      {
        slug: 'matatu-operator-mapping-cbd',
        category: 'Interview',
        title: 'The matatu operator mapping the CBD',
        summary: 'A short interview with the man behind the new route plan.',
        time: '1 hr ago',
        datetime: '2026-10-10T09:00:00+03:00',
        author: 'Video Desk',
        body: [
          'The matatu operator mapping the CBD: a short interview with the man behind the new route plan.',
          'He explains how the designated zones were chosen, and what the first three months of enforcement will look like.',
          'Watch the interview on our video page, part of our series on the city’s transport transformation.',
        ],
      },
      {
        slug: 'how-county-revenue-sharing-works',
        category: 'Explainer',
        title: 'How county revenue sharing works',
        summary: 'A three-minute animation breaks down the formula.',
        time: '2 hrs ago',
        datetime: '2026-10-10T08:00:00+03:00',
        author: 'Video Desk',
        body: [
          'How county revenue sharing works: a three-minute animation breaks down the formula.',
          'The video walks through the factors that decide how much each county receives, using the latest audited figures.',
          'Watch it on our video page, and read the accompanying explainer for the full detail.',
        ],
      },
      {
        slug: 'replay-morning-briefing-newsroom',
        category: 'Live',
        title: 'Replay: the morning briefing with the newsroom',
        summary: 'Catch up on the stories we are watching today.',
        time: '4 hrs ago',
        datetime: '2026-10-10T06:00:00+03:00',
        author: 'Video Desk',
        body: [
          'Replay: the morning briefing with the newsroom, catching up on the stories we are watching today.',
          'The briefing covers politics, business and the counties, with analysis from our desk editors.',
          'Watch the replay on our video page, and subscribe to the briefing for tomorrow’s edition.',
        ],
      },
      {
        slug: 'street-view-week-in-kisumu',
        category: 'Short',
        title: 'Street view: a week in Kisumu',
        summary: 'Ninety seconds of lakeside life, shot by our county correspondents.',
        time: '6 hrs ago',
        datetime: '2026-10-10T04:00:00+03:00',
        author: 'Video Desk',
        body: [
          'Street view: a week in Kisumu, in ninety seconds of lakeside life shot by our county correspondents.',
          'The short film captures the market mornings, the evening breeze and the traffic that defines the lake city.',
          'Watch it on our video page, the latest in our county series.',
        ],
      },
    ],
  },
]

export const allStories: StoryWithSection[] = sections.flatMap((section) =>
  section.stories.map((story) => ({ ...story, section: section.slug, sectionTitle: section.title })),
)

export function getStoryBySlug(slug: string): StoryWithSection | undefined {
  return allStories.find((story) => story.slug === slug)
}

export function getSectionBySlug(slug: string): Section {
  return sections.find((section) => section.slug === slug) ?? sections[0]
}

export function getRelatedStories(slug: string, count = 3): StoryWithSection[] {
  const story = getStoryBySlug(slug)
  if (!story) return []
  const sameSection = allStories.filter((item) => item.section === story.section && item.slug !== slug)
  const others = allStories.filter((item) => item.section !== story.section)
  return [...sameSection, ...others].slice(0, count)
}
