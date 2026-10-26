const sources = {
  aiAct: { name: "European Commission · AI Act enforcement timeline", date: "Updated 7 Aug 2026", url: "https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act", note: "Official timeline for enforcement powers, prohibited practices, GPAI and transparency obligations." },
  transparency: { name: "European Commission · Article 50 transparency FAQ", date: "Current 25 Oct 2026", url: "https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act", note: "Article 50 applies from 2 Aug 2026; limited transitional treatment is described for some marking obligations." },
  nist: { name: "NIST · AI Risk Management Framework", date: "Core framework + 2024 GenAI Profile", url: "https://www.nist.gov/itl/ai-risk-management-framework", note: "Voluntary framework for managing AI risks across design, development, use and evaluation." },
  iso: { name: "ISO/IEC 42001:2023 · AI management systems", date: "Edition 1 · Dec 2023", url: "https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/data/standard/08/12/81230.html?trk=article-ssr-frontend-pulse_little-text-block", note: "International standard for establishing, implementing, maintaining and continually improving an AI management system." },
  project: { name: "Jeevan-0508 · AI Governance Control Room", date: "Public portfolio project · prototype", url: "https://github.com/jeevan-0508", note: "Independent project. The dashboard is presented as a prototype, not a production deployment." }
};

const postParts = {
  t1: ["Europe has moved from AI policy to AI operations.", "The AI Act's transparency obligations under Article 50 apply from 2 August 2026. The European Commission's guidance covers cases such as informing people when they interact with AI and labelling certain AI-generated or manipulated content.", "The useful question for risk teams is not only: Are we compliant?", "It is: Can we show who owns the control, what evidence exists, and what happens when the control fails?", "That is where AI governance starts to look familiar. The mechanics are close to other risk programs: identify the use case, assign an accountable owner, document the control and evidence, monitor exceptions, and escalate material issues.", "The technology is new. The discipline is not.", "For organisations building an AI inventory in Germany, the next step is turning policy language into a reviewable operating rhythm."],
  t2: ["A dashboard can show risk. A control room has to move it.", "That distinction shaped the AI Governance Control Room prototype I built.", "The screen is not the governance system. The system is the operating loop behind it:", "A use case is recorded. A risk is assessed. A control is assigned. Evidence is linked. An exception has an owner and an escalation path.", "ISO/IEC 42001 describes an AI management system as a set of interrelated elements used to establish policies and objectives, manage risk and opportunity, and improve over time.", "That is why I think AI governance work benefits from program-management habits. A control without an owner becomes a document. An issue without a due date becomes a backlog item. A metric without a decision attached becomes decoration.", "This is an independent prototype, not a production deployment. Its purpose is to make the operating model visible and reviewable."],
  t3: ["AI literacy is easy to turn into a checkbox.", "A course was assigned. Attendance was recorded. The control was marked complete.", "That is not enough for a risk program.", "A useful AI literacy control should answer three practical questions: What decisions may this person make with the system? What failure modes must they recognise? When must they stop and escalate?", "The European Commission lists AI literacy among the provisions that applied from 2 February 2025. ISO/IEC 42001 also places competence and awareness inside the management-system context.", "The common thread is simple: capability matters when it changes behaviour.", "For an AI governance program, evidence might include role-based training, scenario checks, escalation guidance and periodic refreshes. The record is useful because it shows what people were expected to do, not just that a slide deck existed."],
  t4: ["A risk register without evidence is only a list of opinions.", "For AI systems, the evidence trail should make the decision process reviewable:", "What use case was assessed? Which risks were considered? What control was selected? Who accepted the residual risk? What evidence shows the control operated?", "NIST's AI RMF is voluntary, but its purpose is practical: help organisations manage AI risks across design, development, use and evaluation. ISO/IEC 42001 adds a management-system frame for policies, responsibilities, monitoring and continual improvement.", "The frameworks are not a substitute for judgement. They are a way to make judgement visible.", "That is the shift I look for in an AI governance program: from a static register to a traceable chain of decisions and evidence."],
  t5: ["A risk score is not a risk decision.", "Fraud intelligence taught me to treat a score as the start of a review, not the conclusion.", "The same discipline matters in AI risk:", "A model may flag an anomaly. A monitoring rule may cross a threshold. A risk rating may change.", "But someone still needs to ask: What context is missing? Is the signal reliable for this use case? Who can override it? What evidence supports the decision? What happens when the pattern changes?", "NIST's AI RMF places risk management inside the broader process of governing, mapping, measuring and managing. That is close to how mature fraud operations work: signals feed judgement, and judgement creates an accountable action.", "AI governance is not just model documentation. It is the operating discipline around the model."],
  t6: ["The hardest AI governance question is often a name.", "Who owns the exception when an AI control fails?", "Not the policy. Not the framework. A person or role with the authority to decide what happens next.", "ISO/IEC 42001 is useful here because it treats AI governance as a management system: policies, objectives, responsibilities, risk treatment, monitoring and continual improvement.", "For each material AI use case, I would want to see: a named accountable owner, a control owner, a review cadence, a documented escalation path, and a record of the decision when the control does not hold.", "The exception path is where governance stops being a diagram and starts becoming operational risk management."],
  t7: ["Responsible AI principles matter. The handoff matters more.", "A policy can say that systems should be fair, transparent and accountable. The operating team still needs to know what to do when a concern appears in a real workflow.", "A practical handoff looks like this: policy defines the expectation; risk translates it into an assessment and control; operations records evidence and exceptions; a decision owner resolves the issue.", "NIST AI RMF and ISO/IEC 42001 both support this move from principle to repeatable management activity. Neither removes the need for context, judgement or escalation design.", "The test is simple: can a person with a real issue find the right route without opening six documents?"],
  t8: ["Automation can reduce manual work while increasing control work.", "That is not a contradiction. It is a change in operating scale.", "When an AI-enabled process makes more decisions, faster, the organisation may also create more exceptions to review, more evidence to retain, more third-party dependencies, and more opportunities for a small error to repeat.", "NIST's AI RMF is built around managing risk across the lifecycle, not only checking a model before release. That lifecycle view becomes more important as the system's reach expands.", "The practical question for program leaders is not: Can we automate this?", "It is: What new control work appears when we do?"],
  t9: ["You cannot govern systems nobody has named.", "That is why the first AI inventory is a discovery exercise before it becomes a spreadsheet project.", "The useful questions are operational: Where is AI already being used? Which vendors or models sit behind the workflow? What decisions or recommendations does the system influence? Who owns the use case? What evidence already exists?", "ISO/IEC 42001 gives organisations a management-system frame for governing AI across policies, responsibilities, risk and continual improvement.", "The first inventory will be incomplete. That is expected.", "The important thing is to make unknown visible, assign a next action and create a route from discovery to assessment."],
  t10: ["AI governance has a translation problem before it has a tooling problem.", "Risk, product, engineering, legal and operations often describe the same system in different language.", "A strong program manager can make the handoffs explicit: turn a policy requirement into a workstream; turn a model risk into an accountable decision; turn a control into evidence; turn an exception into an escalation.", "NIST AI RMF and ISO/IEC 42001 provide useful structures, but an organisation still needs a rhythm for decisions, owners and follow-through.", "That is why I see AI governance as a natural extension of risk and program management. The technical depth matters. So does the ability to carry context across the system."]
};

const topics = [
  { id:"t1", pillar:"RISK / BUSINESS", title:"The AI Act deadline is no longer a future planning problem", score:91, rationale:"The strongest recruiter-facing angle this week: connect a live European compliance date to the operating controls risk teams already understand.", sourceIds:["aiAct","transparency"], scores:{Originality:17,Relevance:20,Evidence:20,Impact:14,Shareability:11,Visual:9}, hooks:["Europe moved from AI policy to AI operations on 2 August 2026.","The first AI Act control most teams will feel is not a model test. It is a transparency check.","A compliance date is only useful when someone owns the evidence.","The AI Act is now an operating question for risk teams, not just a legal question.","What changes when transparency becomes a control with an owner?"], approaches:["Compliance-to-controls: translate the date into owners, evidence and escalation.","Risk leader lens: show where a control library can prevent scattered compliance work.","Practical checklist: three questions for every AI system in the inventory."] },
  { id:"t2", pillar:"AI / HUMANITY", title:"A control room is a management system, not a dashboard", score:88, rationale:"Uses the real portfolio artifact to make governance concrete without claiming production deployment. Strong bridge between program management and AI governance.", sourceIds:["iso","project"], scores:{Originality:19,Relevance:18,Evidence:16,Impact:14,Shareability:12,Visual:9}, hooks:["A dashboard can show risk. A control room has to move it.","The hard part of AI governance is not another policy document.","A control room is useful only when it changes who acts next.","Most governance dashboards stop at visibility.","The difference between reporting and governance is the next decision."], approaches:["Artifact-led: use the control room screenshot and explain the operating loop.","Program-management lens: connect issues, owners, evidence and cadence.","Contrast: visibility is not accountability; show the missing handoff."] },
  { id:"t3", pillar:"FUTURE OF WORK", title:"AI literacy is an operational control, not a training checkbox", score:84, rationale:"Connects a current EU obligation to practical enablement, a useful angle for GRC and program leaders hiring for AI adoption.", sourceIds:["aiAct","iso"], scores:{Originality:16,Relevance:19,Evidence:18,Impact:13,Shareability:10,Visual:8}, hooks:["AI literacy becomes useful when it changes a decision someone makes.","Training is not the control. The changed behaviour is.","An AI literacy register should answer more than who attended.","The most underrated AI control may sit outside the model team.","What does AI literate mean in a real operating process?"], approaches:["Control-design: define observable behaviours and evidence.","Workplace lens: connect literacy to escalation and safe use.","GRC lens: show how training becomes auditable without becoming theatre."] },
  { id:"t4", pillar:"DATA DISCOVERIES", title:"A risk register without evidence is only a list of opinions", score:82, rationale:"Grounded in NIST's implementation orientation and the project's evidence-first design. It can be developed into a practical saved post.", sourceIds:["nist","iso"], scores:{Originality:17,Relevance:18,Evidence:17,Impact:13,Shareability:10,Visual:7}, hooks:["The risk register is not the evidence.","A row in a spreadsheet cannot prove a control works.","AI governance gets stronger when every risk has a receipt.","The fastest way to make a risk register useful is to attach the next proof.","What would you show an auditor if this control failed tomorrow?"], approaches:["Evidence-led: map each control to an observable artifact.","Audit lens: distinguish design evidence from operating evidence.","Execution lens: make evidence collection part of the workflow."] },
  { id:"t5", pillar:"RISK / BUSINESS", title:"Fraud intelligence has a useful lesson for AI risk: context beats a score", score:80, rationale:"Differentiates the profile with credible Amazon risk and fraud-intelligence experience while avoiding unsupported performance claims.", sourceIds:["nist"], scores:{Originality:18,Relevance:18,Evidence:13,Impact:14,Shareability:10,Visual:7}, hooks:["A risk score is not a risk decision.","Fraud teams learn this early: context beats a number.","AI risk needs the same discipline as an unusual transaction review.","The score starts the investigation. It does not finish it.","Model output becomes operational risk when nobody challenges the context."], approaches:["Transferable-skill story: bring fraud intelligence into AI risk operations.","Control lens: thresholds, review queues and escalation.","Program lens: design for human judgement without making it informal."] },
  { id:"t6", pillar:"BIG QUESTIONS", title:"Who owns the exception when an AI control fails?", score:79, rationale:"High discussion value without engagement bait; anchored in accountability themes present in ISO/IEC 42001 and the AI Act.", sourceIds:["iso","aiAct"], scores:{Originality:17,Relevance:19,Evidence:15,Impact:14,Shareability:9,Visual:5}, hooks:["The hardest AI governance question is often a name.","Every control looks complete until an exception needs an owner.","AI risk becomes real at the point of escalation.","The policy is clear. The exception path is not.","An AI governance program is tested by what happens after a control fails."], approaches:["Accountability lens: move from committee names to decision rights.","Scenario: walk through one failed transparency control.","Program lens: build an exception route before launch."] },
  { id:"t7", pillar:"AI / HUMANITY", title:"Responsible AI needs a handoff between policy and operations", score:76, rationale:"Practical framing for teams that have policies but struggle to turn them into repeatable workflows.", sourceIds:["nist","iso"], scores:{Originality:15,Relevance:18,Evidence:17,Impact:12,Shareability:9,Visual:5}, hooks:["The policy is not the handoff.","Responsible AI work often fails between the policy and the queue.","A principle becomes useful when someone can act on it.","Governance needs a workflow, not only a statement of intent.","Where does a Responsible AI concern go on a Tuesday afternoon?"], approaches:["Workflow map: policy, assessment, control, evidence, escalation.","Operating-model lens: define handoffs across legal, product, risk and engineering.","Risk lens: make the who do I call path explicit."] },
  { id:"t8", pillar:"TECH PARADOXES", title:"More AI capability can create more governance work, not less", score:74, rationale:"A useful paradox for risk leaders: automation changes the volume and speed of decisions, which changes control design.", sourceIds:["nist"], scores:{Originality:16,Relevance:17,Evidence:13,Impact:14,Shareability:9,Visual:5}, hooks:["Automation can reduce manual work while increasing control work.","The faster the system acts, the faster governance has to learn.","AI can shrink the process and expand the risk surface.","Efficiency is not the same as control maturity.","The paradox of AI adoption is that speed raises the cost of ambiguity."], approaches:["Systems lens: higher throughput means more exceptions.","Risk lens: match monitoring cadence to decision velocity.","Program lens: design controls before scale makes them expensive."] },
  { id:"t9", pillar:"DATA DISCOVERIES", title:"The first AI inventory is a discovery exercise, not a spreadsheet project", score:72, rationale:"Fits governance implementation work and can lead into an inventory/control-room demo without pretending the inventory is production-ready.", sourceIds:["iso","project"], scores:{Originality:15,Relevance:17,Evidence:15,Impact:12,Shareability:8,Visual:5}, hooks:["An AI inventory is only as good as the conversations behind it.","The spreadsheet is the output. The discovery work is the system.","You cannot govern systems nobody has named.","The first AI inventory is usually incomplete. That is normal.","Inventory work becomes governance when it creates ownership."], approaches:["Discovery playbook: procurement, product, security, HR and operations.","Control-room lens: turn inventory records into reviewable work items.","Program lens: treat unknown systems as a managed risk state."] },
  { id:"t10", pillar:"FUTURE OF WORK", title:"Program managers are becoming translators in AI governance", score:70, rationale:"Directly supports target-role positioning by connecting risk, technical and business language without claiming engineering ownership.", sourceIds:["nist","iso"], scores:{Originality:16,Relevance:17,Evidence:13,Impact:12,Shareability:8,Visual:4}, hooks:["AI governance has a translation problem before it has a tooling problem.","The program manager may be the missing interface in AI risk.","Risk, product and engineering do not use the same nouns.","A governance program needs someone who can carry context across teams.","The control is only real when every team understands its part."], approaches:["Role clarity: define the translator function across teams.","Program rhythm: forums, evidence, decisions and follow-through.","Career lens: explain why risk experience transfers into AI governance."] }
];

let selectedId = "t1";
let activeFilter = "ALL";
let activeTab = "hooks";
let approved = false;
const topic = () => topics.find(item => item.id === selectedId) || topics[0];
const el = id => document.getElementById(id);
const escapeHtml = value => String(value).replace(/[&<>"']/g, match => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[match]));
const makePost = id => postParts[id].join("\n\n");

function showToast(message) {
  const node = el("toast");
  node.textContent = message;
  node.classList.add("show");
  setTimeout(() => node.classList.remove("show"), 2600);
}

function renderFilters() {
  const pillars = ["AI / HUMANITY","TECH PARADOXES","FUTURE OF WORK","RISK / BUSINESS","DATA DISCOVERIES","BIG QUESTIONS"];
  el("filterRow").innerHTML = pillars.map(pillar => "<button class=\"filter-chip " + (activeFilter === pillar ? "active" : "") + "\" data-filter=\"" + pillar + "\">" + pillar + "</button>").join("");
  document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    renderFilters();
    renderTopics();
  }));
}

function renderTopics() {
  const visible = activeFilter === "ALL" ? topics : topics.filter(item => item.pillar === activeFilter);
  el("topicList").innerHTML = visible.map((item, index) => "<button class=\"topic-card " + (item.id === selectedId ? "selected" : "") + "\" data-topic=\"" + item.id + "\"><span class=\"topic-rank\">" + String(index + 1).padStart(2, "0") + "</span><span><span class=\"topic-title\">" + escapeHtml(item.title) + "</span><span class=\"topic-meta\"><i class=\"pillar-dot\"></i>" + item.pillar + " · " + item.sourceIds.length + " sources</span></span><span class=\"score\">" + item.score + "</span></button>").join("");
  document.querySelectorAll("[data-topic]").forEach(button => button.addEventListener("click", () => {
    selectedId = button.dataset.topic;
    renderTopics();
    renderStory();
    renderWriting();
  }));
}

function renderStory() {
  const item = topic();
  el("selectedPillar").textContent = item.pillar;
  el("selectedScore").textContent = item.score;
  el("scoreRingValue").textContent = item.score;
  el("selectedTitle").textContent = item.title;
  el("selectedRationale").textContent = item.rationale;
  el("scoreBreakdown").innerHTML = Object.entries(item.scores).map(entry => "<div class=\"score-line\"><span>" + entry[0] + "</span><b><i style=\"width:" + (entry[1] / 20 * 100) + "%\"></i></b><strong>" + entry[1] + "</strong></div>").join("");
  el("selectedSources").innerHTML = item.sourceIds.map(id => {
    const source = sources[id];
    return "<div class=\"source-item\"><i></i><div><a href=\"" + source.url + "\" target=\"_blank\" rel=\"noreferrer\">" + source.name + "</a><small>" + source.date + " · " + source.note + "</small></div></div>";
  }).join("");
  el("visualTitle").textContent = item.id === "t2" ? "A control room is a management system, not a dashboard." : "Evidence first. Use a real portfolio artifact when the story calls for one.";
}

function renderWriting() {
  const item = topic();
  let body = "";
  if (activeTab === "hooks") {
    body = "<div class=\"writing-content\"><div class=\"hook-list\">" + item.hooks.map((hook, index) => "<div class=\"hook-card\"><strong>" + escapeHtml(hook) + "</strong><span>Hook " + (index + 1) + " · " + ["curiosity gap","contrarian","time anchor","question close","principle"][index] + "</span></div>").join("") + "</div></div>";
  } else if (activeTab === "angles") {
    body = "<div class=\"writing-content\"><div class=\"approach-list\">" + item.approaches.map((approach, index) => "<div class=\"approach-card\"><strong>" + escapeHtml(approach) + "</strong><span>Approach " + (index + 1) + " · selected for recruiter relevance</span></div>").join("") + "</div></div>";
  } else {
    const post = makePost(item.id);
    body = "<div class=\"writing-content\"><div class=\"post-copy\">" + escapeHtml(post) + "</div><div class=\"post-footer\"><span>" + post.split(/\s+/).filter(Boolean).length + " WORDS · DRAFT</span><span>#AIGOVERNANCE #AIRISK #GRC</span></div></div>";
  }
  el("writingContent").innerHTML = body;
  document.querySelectorAll("[data-tab]").forEach(button => button.addEventListener("click", () => {
    activeTab = button.dataset.tab;
    document.querySelectorAll("[data-tab]").forEach(tab => tab.classList.toggle("active", tab === button));
    renderWriting();
  }));
}

function renderChecks() {
  const checks = [
    ["Primary sources linked","Every factual claim has a source or is marked as a personal/project observation."],
    ["Dates and figures checked","Currentness is recorded; no unsupported performance claims are present."],
    ["Project status is accurate","Prototype and public portfolio work are not described as production deployments."],
    ["Audience fit","Topic supports AI governance, risk, GRC or program-management credibility."],
    ["Humanizer pass","No generic motivational language, engagement bait or performed certainty."],
    ["Approval gate","Package remains local and unpublished until explicit human approval."]
  ];
  el("checkList").innerHTML = checks.map(check => "<div class=\"check-row\"><span class=\"check-icon\">✓</span><div><strong>" + check[0] + "</strong><span>" + check[1] + "</span></div></div>").join("");
}

function renderMiniCalendar() {
  const items = [["MON 26","Research","Source refresh"],["TUE 27","Score","Shortlist 3 topics"],["WED 28","Draft","Hooks + narrative"],["THU 29","QC","Fact-check + visual"],["FRI 30","Review","15:00 · human approval"]];
  el("miniCalendar").innerHTML = items.map((item, index) => "<div class=\"mini-day " + (index === 4 ? "today" : "") + "\"><time>" + item[0] + "</time><strong>" + item[1] + "</strong><span>" + item[2] + "</span></div>").join("");
}

function renderCalendar() {
  const days = [["MON 26 OCT","RESEARCH","Refresh sources; record publication dates and caveats.","QUEUE"],["TUE 27 OCT","SCORE","Score 10 candidates; select the top 3 with rationale.","SHORTLIST"],["WED 28 OCT","WRITE","Generate hooks, approaches, draft and source-linked caption.","DRAFT"],["THU 29 OCT","QUALITY CONTROL","Run factual, numerical, originality, readability and visual checks.","QC GATE"],["FRI 30 OCT","HUMAN REVIEW","Deliver the package at 15:00 Europe/Berlin. Do not auto-publish.","APPROVAL"]];
  el("calendarBoard").innerHTML = days.map((day, index) => "<div class=\"calendar-day " + (index === 4 ? "active" : "") + "\"><time>" + day[0] + "</time><h3>" + day[1] + "</h3><p>" + day[2] + "</p><span class=\"day-pill\">" + day[3] + "</span></div>").join("");
}

function renderSources() {
  el("sourcesBoard").innerHTML = Object.values(sources).map(source => "<article class=\"source-card\"><span>" + source.date + "</span><h3>" + source.name + "</h3><p>" + source.note + "</p><a href=\"" + source.url + "\" target=\"_blank\" rel=\"noreferrer\">OPEN PRIMARY SOURCE ↗</a></article>").join("");
}

function switchSection(section) {
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.section === section));
  document.querySelectorAll("[data-view]").forEach(view => {
    view.style.display = (section === "overview" && view.dataset.view === "overview") || view.dataset.view === section ? "" : "none";
  });
  if (section === "queue") el("queuePanel").scrollIntoView({ behavior:"smooth", block:"start" });
  if (section === "writing") document.querySelector(".writing-section").scrollIntoView({ behavior:"smooth", block:"start" });
  if (section === "calendar") document.querySelector("[data-view=\"calendar\"]").scrollIntoView({ behavior:"smooth", block:"start" });
  if (section === "sources") document.querySelector("[data-view=\"sources\"]").scrollIntoView({ behavior:"smooth", block:"start" });
  if (section === "history") document.querySelector("[data-view=\"history\"]").scrollIntoView({ behavior:"smooth", block:"start" });
}

function exportPackage() {
  const item = topic();
  const payload = {
    project:"SIGNAL//FRIDAY",
    week:"2026-W44",
    timezone:"Europe/Berlin",
    status: approved ? "READY_FOR_MANUAL_REVIEW" : "DRAFT",
    selectedTopic:item.title,
    score:item.score,
    scores:item.scores,
    post:makePost(item.id),
    hooks:item.hooks,
    approaches:item.approaches,
    sources:item.sourceIds.map(id => sources[id]),
    humanApprovalRequired:true,
    autoPublishing:false,
    metricsImported:false
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type:"application/json" });
  const anchor = document.createElement("a");
  anchor.href = URL.createObjectURL(blob);
  anchor.download = "signal-friday-week-44-package.json";
  anchor.click();
  URL.revokeObjectURL(anchor.href);
  showToast("Local package exported. Nothing was published.");
}

document.querySelectorAll(".nav-item").forEach(button => button.addEventListener("click", () => switchSection(button.dataset.section)));
document.querySelectorAll("[data-section-link]").forEach(button => button.addEventListener("click", () => switchSection(button.dataset.sectionLink)));
el("exportButton").addEventListener("click", exportPackage);
el("approvalButton").addEventListener("click", () => {
  approved = !approved;
  el("approvalButton").textContent = approved ? "MARKED READY · NO PUBLISH" : "REQUEST HUMAN APPROVAL";
  el("approvalButton").classList.toggle("approved", approved);
  showToast(approved ? "Marked ready for your manual review." : "Approval marker cleared.");
});
el("metricsInfoButton").addEventListener("click", () => showToast("Metrics stay blank until actual LinkedIn data is imported."));

renderFilters();
renderTopics();
renderStory();
renderWriting();
renderChecks();
renderMiniCalendar();
renderCalendar();
renderSources();
switchSection("overview");
