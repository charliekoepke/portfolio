import { cx } from "../lib/cx.js";
import Avatar from "../components/atoms/Avatar.jsx";
import Badge from "../components/atoms/Badge.jsx";
import Button from "../components/atoms/Button.jsx";
import Checkbox from "../components/atoms/Checkbox.jsx";
import { ICON_SET } from "../components/atoms/Icon.jsx";
import IconButton from "../components/atoms/IconButton.jsx";
import Input from "../components/atoms/Input.jsx";
import Lozenge from "../components/atoms/Lozenge.jsx";
import RadioGroup from "../components/atoms/Radio.jsx";
import Spinner from "../components/atoms/Spinner.jsx";
import Tag from "../components/atoms/Tag.jsx";
import TextLink from "../components/atoms/TextLink.jsx";
import Textarea from "../components/atoms/Textarea.jsx";
import Toggle from "../components/atoms/Toggle.jsx";
import Alert from "../components/molecules/Alert.jsx";
import Banner from "../components/molecules/Banner.jsx";
import Breadcrumbs from "../components/molecules/Breadcrumbs.jsx";
import DatePicker from "../components/molecules/DatePicker.jsx";
import DropdownMenu from "../components/molecules/DropdownMenu.jsx";
import EmptyState from "../components/molecules/EmptyState.jsx";
import Flag from "../components/molecules/Flag.jsx";
import Form, { FormActions } from "../components/molecules/Form.jsx";
import InlineEdit from "../components/molecules/InlineEdit.jsx";
import InlineMessage from "../components/molecules/InlineMessage.jsx";
import { DialogPreview } from "../components/molecules/ModalDialog.jsx";
import Pagination from "../components/molecules/Pagination.jsx";
import Popup from "../components/molecules/Popup.jsx";
import ProgressBar from "../components/molecules/ProgressBar.jsx";
import ProjectCard from "../components/molecules/ProjectCard.jsx";
import Search from "../components/molecules/Search.jsx";
import Select from "../components/molecules/Select.jsx";
import SideNavigation from "../components/molecules/SideNavigation.jsx";
import Tabs from "../components/molecules/Tabs.jsx";
import Tooltip from "../components/molecules/Tooltip.jsx";
import ChatPanel from "../components/organisms/ChatPanel.jsx";
import ContentPanel from "../components/organisms/ContentPanel.jsx";
import DashboardCard from "../components/organisms/DashboardCard.jsx";
import { Billboard, StudyHero } from "../components/organisms/Hero.jsx";
import Navigation from "../components/organisms/Navigation.jsx";
import PageHeader from "../components/organisms/PageHeader.jsx";
import SiteFooter from "../components/organisms/SiteFooter.jsx";
import Table from "../components/organisms/Table.jsx";
import WorkItemHeader from "../components/organisms/WorkItemHeader.jsx";
import CaseStudy from "../components/patterns/CaseStudy.jsx";
import { ListDetail, ThreeColumnLayout } from "../components/patterns/Layouts.jsx";
import PanelExpandCollapse from "../components/patterns/PanelExpandCollapse.jsx";
import StudyGate from "../components/patterns/StudyGate.jsx";
import { CalendarDemo, Dismissible, LiveDialog, RemovableTags } from "./demos.jsx";

export function State({ label, wide, children }) {
  return (
    <figure className={cx("state", wide && "state-wide")}>
      <figcaption>{label}</figcaption>
      <div className="state-body">{children}</div>
    </figure>
  );
}

const MODES = [
  ["", "resting"],
  ["hover", "hover"],
  ["pressed", "pressed"],
  ["focus", "focus"],
  ["disabled", "disabled"],
];

const QUIET_MODES = MODES.filter(([mode]) => mode !== "pressed");

function sampleProps(mode) {
  return mode && mode !== "disabled" ? { state: mode, tabIndex: -1 } : { state: mode || undefined };
}

function OnPage({ when, children }) {
  return when ? <div className="on-page">{children}</div> : children;
}

const statusRows = [
  { project: "Intake redesign", year: "2026", status: <Lozenge tone="info">In progress</Lozenge> },
  { project: "Results view", year: "2025", status: <Lozenge tone="success">Complete</Lozenge> },
  { project: "Handoff notes", year: "2024", status: <Lozenge tone="danger">Blocked</Lozenge> },
];

const projectCard = (
  <ProjectCard title="Project Name" summary="A short description of the project." href="#card" headingLevel={3} />
);

const sampleStudy = {
  title: "Website Modernization",
  disclosure:
    "The work I do is government work, so I cannot include specific names of clients or products. Everything here stays generalized.",
  sections: {
    problem: { paragraphs: ["Why this problem was worth solving, and how the understanding was built before a solution."] },
    how: {
      paragraphs: ["Which insights set the focus, which problems were set aside, and how the direction was agreed."],
      figure: { caption: "What this example shows." },
    },
    brainstorming: {
      paragraphs: ["Early ideas, sketches, and the critique that changed them."],
      figure: { caption: "What this example shows." },
    },
    prototyping: {
      paragraphs: ["The key screens and flows, and the interaction and accessibility choices behind them."],
      figure: { caption: "What this example shows." },
    },
    testing: {
      paragraphs: ["What was tested, what failed, and what changed because of the evidence."],
      figure: { caption: "What this example shows." },
    },
    lessons: { paragraphs: ["What changed because of the work, and what is still unknown."] },
  },
};

const card = <DashboardCard label="Projects" value="6" />;

const atoms = [
  {
    id: "button",
    title: "Button",
    render: () => (
      <>
        {["primary", "secondary"].map((variant) =>
          MODES.map(([mode, name]) => (
            <State key={`${variant}-${name}`} label={`${variant === "primary" ? "Primary" : "Secondary"}, ${name}`}>
              <OnPage when={mode === "focus"}>
                <Button variant={variant} {...sampleProps(mode)}>
                  {variant === "primary" ? "Save" : "Cancel"}
                </Button>
              </OnPage>
            </State>
          ))
        )}
        <State label="Primary and secondary" wide>
          <div className="pair">
            <Button>Save</Button>
            <Button variant="secondary">Cancel</Button>
          </div>
        </State>
      </>
    ),
  },
  {
    id: "badge",
    title: "Badge",
    render: () => (
      <>
        <State label="Neutral">
          <span className="count-line">
            Comments <Badge>3</Badge>
          </span>
        </State>
        <State label="Navy">
          <span className="count-line">
            Notes <Badge tone="navy">3</Badge>
          </span>
        </State>
        <State label="Important">
          <span className="count-line">
            Comments <Badge tone="important">3</Badge>
          </span>
        </State>
        <State label="Over 99">
          <span className="count-line">
            Comments <Badge>99+</Badge>
          </span>
        </State>
      </>
    ),
  },
  {
    id: "checkbox",
    title: "Checkbox",
    render: () => (
      <>
        <State label="Unchecked">
          <Checkbox label="Subscribe to updates" />
        </State>
        <State label="Hover, unchecked">
          <Checkbox label="Subscribe to updates" state="hover" tabIndex={-1} />
        </State>
        <State label="Checked">
          <Checkbox label="Subscribe to updates" defaultChecked />
        </State>
        <State label="Indeterminate">
          <Checkbox label="Select all projects" indeterminate tabIndex={-1} />
        </State>
        <State label="Hover, checked">
          <Checkbox label="Subscribe to updates" state="hover" defaultChecked tabIndex={-1} />
        </State>
        <State label="Focus">
          <Checkbox label="Subscribe to updates" state="focus" defaultChecked tabIndex={-1} />
        </State>
        <State label="Disabled, unchecked">
          <Checkbox label="Subscribe to updates" disabled />
        </State>
        <State label="Disabled, checked">
          <Checkbox label="Subscribe to updates" defaultChecked disabled />
        </State>
      </>
    ),
  },
  {
    id: "icon-button",
    title: "Icon button",
    render: () => (
      <>
        {[
          ["primary", "Primary", MODES],
          ["secondary", "Secondary", MODES],
          ["quiet", "Quiet", QUIET_MODES],
        ].map(([variant, word, modes]) =>
          modes.map(([mode, name]) => (
            <State key={`${variant}-${name}`} label={`${word}, ${name}`}>
              <IconButton variant={variant} icon="search" label="Search" {...sampleProps(mode)} />
            </State>
          ))
        )}
        <State label="Starting set" wide>
          <div className="row">
            {ICON_SET.map((name) => (
              <IconButton key={name} icon={name} label={name.charAt(0).toUpperCase() + name.slice(1)} />
            ))}
          </div>
        </State>
      </>
    ),
  },
  {
    id: "input",
    title: "Input",
    render: () => (
      <>
        <State label="Resting">
          <Input
            id="email"
            label="Email address (required)"
            type="email"
            placeholder="name@domain.com"
            autoComplete="email"
            help="Used for project inquiries."
          />
        </State>
        <State label="Hover">
          <Input
            id="email-hover"
            label="Email address (required)"
            type="email"
            placeholder="name@domain.com"
            state="hover"
            tabIndex={-1}
            help="Used for project inquiries."
          />
        </State>
        <State label="Focus">
          <OnPage when>
            <Input
              id="email-focus"
              label="Email address (required)"
              type="email"
              defaultValue="ada@agency.com"
              state="focus"
              tabIndex={-1}
            />
          </OnPage>
        </State>
        <State label="Error">
          <Input
            id="email-error"
            label="Email address (required)"
            type="email"
            defaultValue="ada@agency"
            error="Enter an email address with an @ and a domain."
          />
        </State>
        <State label="Disabled">
          <Input
            id="email-disabled"
            label="Email address (required)"
            type="email"
            defaultValue="ada@agency.com"
            state="disabled"
            help="Used for project inquiries."
          />
        </State>
      </>
    ),
  },
  {
    id: "textarea",
    title: "Textarea",
    render: () => (
      <>
        <State label="Resting">
          <Textarea id="summary" label="Project summary" placeholder="What changed for the care team" />
        </State>
        <State label="Error">
          <Textarea
            id="summary-error"
            label="Project summary"
            defaultValue="What changed"
            error="Add the outcome for the care team."
          />
        </State>
        <State label="Disabled">
          <Textarea id="summary-off" label="Project summary" defaultValue="What changed for the care team" disabled />
        </State>
      </>
    ),
  },
  {
    id: "radio",
    title: "Radio",
    render: () => (
      <>
        <State label="Default, Standard selected">
          <RadioGroup
            legend="Case study length"
            name="length"
            defaultValue="standard"
            options={[
              { value: "short", label: "Short" },
              { value: "standard", label: "Standard" },
              { value: "deep", label: "In depth" },
            ]}
          />
        </State>
        <State label="Disabled">
          <RadioGroup
            legend="Case study length"
            name="length-off"
            defaultValue="standard"
            disabled
            options={[
              { value: "short", label: "Short" },
              { value: "standard", label: "Standard" },
            ]}
          />
        </State>
      </>
    ),
  },
  {
    id: "toggle",
    title: "Toggle",
    render: () => (
      <>
        <State label="Off">
          <Toggle label="Show draft projects" />
        </State>
        <State label="On">
          <Toggle label="Show draft projects" defaultChecked />
        </State>
        <State label="Focus">
          <Toggle label="Show draft projects" state="focus" defaultChecked tabIndex={-1} />
        </State>
        <State label="Disabled, off">
          <Toggle label="Show draft projects" disabled />
        </State>
        <State label="Disabled, on">
          <Toggle label="Show draft projects" defaultChecked disabled />
        </State>
      </>
    ),
  },
  {
    id: "avatar",
    title: "Avatar",
    render: () => (
      <>
        <State label="Small, 24px">
          <Avatar size="sm" name="John Doe" initials="JD" />
        </State>
        <State label="Medium, 32px">
          <Avatar size="md" name="John Doe" initials="JD" />
        </State>
        <State label="Large, 40px">
          <Avatar size="lg" name="John Doe" initials="JD" />
        </State>
      </>
    ),
  },
  {
    id: "lozenge",
    title: "Lozenge",
    render: () => (
      <>
        <State label="Neutral">
          <Lozenge>Not started</Lozenge>
        </State>
        <State label="Success">
          <Lozenge tone="success">Complete</Lozenge>
        </State>
        <State label="Warning">
          <Lozenge tone="warning">At risk</Lozenge>
        </State>
        <State label="Danger">
          <Lozenge tone="danger">Blocked</Lozenge>
        </State>
        <State label="Info">
          <Lozenge tone="info">In progress</Lozenge>
        </State>
      </>
    ),
  },
  {
    id: "tag",
    title: "Tag",
    render: () => (
      <>
        <State label="Removable">
          <RemovableTags labels={["Research", "Clinical"]} />
        </State>
        <State label="Link">
          <Tag label="Clinical" href="#tag" />
        </State>
      </>
    ),
  },
  {
    id: "spinner",
    title: "Spinner",
    render: () => (
      <>
        <State label="16px">
          <Spinner size="sm" />
        </State>
        <State label="24px">
          <Spinner size="md" />
        </State>
        <State label="Inside a busy button">
          <Button aria-busy="true">
            <Spinner size="sm" live={false} />
          </Button>
        </State>
      </>
    ),
  },
  {
    id: "link",
    title: "Link",
    render: () => (
      <>
        <State label="Resting">
          <p className="type-body">
            A care team reads results without the noise. <TextLink href="#link">Read the case study</TextLink>
          </p>
        </State>
        <State label="Hover">
          <TextLink href="#link" state="hover" tabIndex={-1}>
            Read the case study
          </TextLink>
        </State>
        <State label="Focus">
          <OnPage when>
            <TextLink href="#link" state="focus" tabIndex={-1}>
              Read the case study
            </TextLink>
          </OnPage>
        </State>
        <State label="Opens in a new tab">
          <TextLink href="#link" newTab>
            Design notes
          </TextLink>
        </State>
      </>
    ),
  },
];

const molecules = [
  {
    id: "tabs",
    title: "Tabs",
    render: () => (
      <State label="Overview selected" wide>
        <Tabs
          label="Case study"
          tabs={[
            { id: "overview", label: "Overview", content: <p>How a care team reads results without the noise.</p> },
            { id: "process", label: "Process", content: <p>The steps from intake to the published case study.</p> },
            { id: "outcome", label: "Outcome", content: <p>Fewer handoffs for the care team.</p> },
          ]}
        />
      </State>
    ),
  },
  {
    id: "breadcrumbs",
    title: "Breadcrumbs",
    render: () => (
      <State label="Current page">
        <Breadcrumbs
          items={[
            { label: "Work", href: "#breadcrumbs" },
            { label: "Clinical", href: "#breadcrumbs" },
            { label: "Intake redesign" },
          ]}
        />
      </State>
    ),
  },
  {
    id: "card",
    title: "Card",
    render: () => (
      <>
        <State label="Horizontal, media on the left" wide>
          <ul className="project-list">{projectCard}</ul>
        </State>
        <State label="Stacked, media on top">
          <ul className="preview-row">{projectCard}</ul>
        </State>
      </>
    ),
  },
  {
    id: "dropdown-menu",
    title: "Dropdown menu",
    render: () => {
      const items = [{ label: "Edit" }, { label: "Duplicate" }, { label: "Archive", danger: true }];
      return (
        <>
          <State label="Closed">
            <DropdownMenu label="Project actions" items={items} />
          </State>
          <State label="Open">
            <DropdownMenu label="Project actions" items={items} defaultOpen highlight={1} />
          </State>
        </>
      );
    },
  },
  {
    id: "modal-dialog",
    title: "Modal dialog",
    render: () => (
      <>
        <State label="Open" wide>
          <DialogPreview
            title="Delete this project?"
            actions={
              <>
                <Button variant="secondary">Cancel</Button>
                <Button>Delete</Button>
              </>
            }
          >
            <p>Intake redesign will be removed from the site.</p>
          </DialogPreview>
        </State>
        <State label="Live dialog">
          <LiveDialog />
        </State>
      </>
    ),
  },
  {
    id: "alert",
    title: "Alert",
    render: () => (
      <>
        <State label="Success, dismissible" wide>
          <Dismissible
            render={(dismiss) => (
              <Alert tone="success" title="Sent Successfully" onDismiss={dismiss}>
                Thank you for reaching out! I will get back to you as soon as I am able.
              </Alert>
            )}
          />
        </State>
        <State label="Error, dismissible" wide>
          <Dismissible
            render={(dismiss) => (
              <Alert tone="error" title="An Error Occurred" onDismiss={dismiss}>
                Please try again in a moment
              </Alert>
            )}
          />
        </State>
        <State label="Warning, stays open" wide>
          <Alert tone="warning" title="Warning">
            This draft is unpublished.
          </Alert>
        </State>
      </>
    ),
  },
  {
    id: "banner",
    title: "Banner",
    render: () => (
      <>
        <State label="Warning" wide>
          <Banner tone="warning">
            Warning. We've lost the connection. Your edits are saved on this device.{" "}
            <TextLink href="#banner">Check status</TextLink>
          </Banner>
        </State>
        <State label="Error" wide>
          <Banner tone="error">Error. The site can't load projects right now.</Banner>
        </State>
      </>
    ),
  },
  {
    id: "flag",
    title: "Flag",
    render: () => (
      <>
        {[
          ["success", "Success", "Project saved."],
          ["warning", "Warning", "Warning. This draft is unpublished."],
          ["error", "Error", "Error. The project was not saved."],
        ].map(([tone, label, title]) => (
          <State key={tone} label={label}>
            <Dismissible render={(dismiss) => <Flag tone={tone} title={title} onDismiss={dismiss} />} />
          </State>
        ))}
      </>
    ),
  },
  {
    id: "inline-message",
    title: "Inline message",
    render: () => (
      <>
        <State label="Info" wide>
          <InlineMessage tone="info" title="This case study is still a draft.">
            <p>Publish it when the outcome section is ready.</p>
            <p>
              <TextLink href="#inline-message">Edit the draft</TextLink>
            </p>
          </InlineMessage>
        </State>
        <State label="Warning" wide>
          <InlineMessage tone="warning" title="Warning. The outcome section is empty.">
            <p>Add what changed for the care team.</p>
          </InlineMessage>
        </State>
        <State label="Error" wide>
          <InlineMessage tone="error" title="Error. Fix 2 fields before sending.">
            <p>
              <TextLink href="#email-error">Email address</TextLink>
            </p>
          </InlineMessage>
        </State>
      </>
    ),
  },
  {
    id: "tooltip",
    title: "Tooltip",
    render: () => (
      <State label="Hover and focus">
        <Tooltip text="Search" defaultVisible>
          <IconButton icon="search" label="Search" />
        </Tooltip>
      </State>
    ),
  },
  {
    id: "form",
    title: "Form",
    render: () => (
      <State label="Default" wide>
        <Form>
          <Input id="form-email" label="Email address (required)" type="email" placeholder="name@domain.com" autoComplete="email" />
          <Textarea id="form-message" label="Message" />
          <FormActions>
            <Button type="submit">Send message</Button>
          </FormActions>
        </Form>
      </State>
    ),
  },
  {
    id: "select",
    title: "Select",
    render: () => (
      <>
        <State label="Closed">
          <Select id="role" label="Role" options={["Design", "Research", "Engineering"]} />
        </State>
        <State label="Open">
          <div className="menu" role="listbox" aria-label="Role">
            {["Design", "Research", "Engineering"].map((option, index) => (
              <button
                key={option}
                type="button"
                className={cx("menu-item", index === 0 && "is-focus")}
                role="option"
                aria-selected={index === 0}
              >
                {option}
              </button>
            ))}
          </div>
        </State>
      </>
    ),
  },
  {
    id: "date-picker",
    title: "Date picker",
    render: () => (
      <>
        <State label="Closed">
          <DatePicker id="published" label="Published on" defaultValue="2026-04-12" />
        </State>
        <State label="Open, 12 April selected">
          <CalendarDemo year={2026} month={3} day={12} />
        </State>
      </>
    ),
  },
  {
    id: "pagination",
    title: "Pagination",
    render: () => (
      <>
        <State label="First page">
          <Pagination current={1} total={5} hrefFor={() => "#pagination"} />
        </State>
        <State label="Middle page">
          <Pagination current={3} total={5} label="Pagination example" hrefFor={() => "#pagination"} />
        </State>
      </>
    ),
  },
  {
    id: "inline-edit",
    title: "Inline edit",
    render: () => (
      <>
        <State label="Read">
          <InlineEdit label="Project title" defaultValue="Intake redesign" />
        </State>
        <State label="Editing" wide>
          <InlineEdit label="Project title" defaultValue="Intake redesign" defaultEditing />
        </State>
      </>
    ),
  },
  {
    id: "search",
    title: "Search",
    render: () => (
      <>
        <State label="Empty">
          <Search id="search-projects" label="Search projects" placeholder="Project or client" />
        </State>
        <State label="With a clear control">
          <Search id="search-filled" label="Search projects" defaultValue="Clinical" />
        </State>
      </>
    ),
  },
  {
    id: "popup",
    title: "Popup",
    render: () => (
      <State label="Open">
        <Popup label="Filters" defaultOpen>
          <Select id="popup-role" label="Role" options={["Design", "Research", "Engineering"]} />
          <FormActions>
            <Button>Apply</Button>
          </FormActions>
        </Popup>
      </State>
    ),
  },
  {
    id: "progress-bar",
    title: "Progress bar",
    render: () => (
      <State label="40 percent" wide>
        <ProgressBar label="Uploading images" value={40} />
      </State>
    ),
  },
  {
    id: "side-navigation",
    title: "Side navigation",
    render: () => (
      <>
        <State label="Work current">
          <SideNavigation
            items={[
              { label: "Work", href: "#side-navigation" },
              { label: "About", href: "#side-navigation" },
              { label: "Notes", href: "#side-navigation" },
            ]}
            current="Work"
            hover="About"
          />
        </State>
        <State label="Narrow, menu closed">
          <IconButton icon="menu" label="Open menu" />
        </State>
      </>
    ),
  },
  {
    id: "empty-state",
    title: "Empty state",
    render: () => (
      <State label="No projects" wide>
        <EmptyState icon="document" title="No Projects Yet" action={<Button>Add a project</Button>}>
          Add a case study to show it here.
        </EmptyState>
      </State>
    ),
  },
];

const organisms = [
  {
    id: "table",
    title: "Table",
    render: () => (
      <State label="Default" wide>
        <Table
          caption="Projects"
          columns={[
            { key: "project", label: "Project" },
            { key: "year", label: "Year", sort: "descending" },
            { key: "status", label: "Status" },
          ]}
          rows={statusRows}
        />
      </State>
    ),
  },
  {
    id: "navigation",
    title: "Navigation",
    render: () => (
      <>
        <State label="Work current" wide>
          <Navigation siteName="Portfolio" links={["Work", "About", "Notes"]} current="Work" />
        </State>
        <State label="About hover" wide>
          <Navigation siteName="Portfolio" links={["Work", "About", "Notes"]} current="Work" hover="About" />
        </State>
        <State label="Narrow" wide>
          <Navigation siteName="Portfolio" narrow />
        </State>
      </>
    ),
  },
  {
    id: "page-header",
    title: "Page header",
    render: () => (
      <State label="With actions" wide>
        <PageHeader
          crumbs={[
            { label: "Work", href: "#page-header" },
            { label: "Clinical", href: "#page-header" },
          ]}
          title="Intake redesign"
          description="How a care team reads results without the noise."
          actions={
            <>
              <Button>View project</Button>
              <Button variant="secondary">Contact</Button>
            </>
          }
        />
      </State>
    ),
  },
  {
    id: "hero",
    title: "Hero",
    render: () => (
      <>
        <State label="Home, shade blocks" wide>
          <Billboard pattern="blocks" title="Charlie Koepke" role="UX Designer and Researcher" />
        </State>
        <State label="About, circles" wide>
          <Billboard pattern="circles" title="About Me" />
        </State>
        <State label="Projects, lines" wide>
          <Billboard pattern="lines" title="Projects" />
        </State>
        <State label="Case study, plain" wide>
          <StudyHero
            crumbs={[{ label: "Projects", href: "#hero" }, { label: "Website Modernization" }]}
            title="Website Modernization"
          />
        </State>
      </>
    ),
  },
  {
    id: "content-panel",
    title: "Content panel",
    render: () => (
      <State label="With a link">
        <ContentPanel title="Role">
          Product design for clinical tools. <TextLink href="#content-panel">Read the bio</TextLink>
        </ContentPanel>
      </State>
    ),
  },
  {
    id: "chat-panel",
    title: "Chat panel",
    render: () => (
      <State label="Comments" wide>
        <ChatPanel
          comments={[
            {
              initials: "CK",
              name: "CK",
              date: "2 Apr 2026",
              datetime: "2026-04-02",
              text: "The intake flow needs a quieter confirmation.",
            },
            {
              initials: "JD",
              name: "John Doe",
              date: "3 Apr 2026",
              datetime: "2026-04-03",
              text: "The confirmation can stay on this page.",
            },
          ]}
        />
      </State>
    ),
  },
  {
    id: "dashboard-card",
    title: "Dashboard card",
    render: () => (
      <>
        <State label="With a lozenge">
          <DashboardCard label="Projects" value="6">
            <Lozenge tone="info">In progress</Lozenge>
          </DashboardCard>
        </State>
        <State label="With a badge">
          <DashboardCard label="Projects" value="6" badge="+2" />
        </State>
      </>
    ),
  },
  {
    id: "work-item-header",
    title: "Work item header",
    render: () => (
      <State label="With status and notes" wide>
        <WorkItemHeader
          itemKey="CLIN-12"
          title="Intake redesign"
          href="#work-item-header"
          status={{ tone: "info", label: "In progress" }}
          notes={3}
          action={<Button>View project</Button>}
        />
      </State>
    ),
  },
  {
    id: "footer",
    title: "Footer",
    render: () => (
      <State label="Name, contact icons, and site links" wide>
        <SiteFooter />
      </State>
    ),
  },
];

const patterns = [
  {
    id: "canvas-content-flow",
    title: "Canvas content flow",
    render: () => (
      <State label="Stacked regions, 32px apart" wide>
        <div className="stack">
          <Navigation siteName="Portfolio" links={["Work"]} current="Work" href="#canvas-content-flow" />
          <PageHeader title="Work" />
          <div className="cards">
            {card}
            {card}
          </div>
          <p className="type-body">Projects table</p>
        </div>
      </State>
    ),
  },
  {
    id: "case-study",
    title: "Case study",
    render: () => (
      <>
        <State label="Grey header and six sections" wide>
          <CaseStudy project={sampleStudy} projectsLink={{ href: "#case-study" }} />
        </State>
        <State label="Password">
          <StudyGate fieldId="study-password-sample" check={() => false} onUnlock={() => {}} />
        </State>
      </>
    ),
  },
  {
    id: "three-column-layout",
    title: "Three column layout",
    render: () => (
      <State label="Side navigation, main, aside" wide>
        <ThreeColumnLayout
          nav={
            <nav className="layout-col" aria-label="Sections">
              <a className="side-link" href="#three-column-layout" aria-current="page">
                Work
              </a>
              <a className="side-link" href="#three-column-layout">
                About
              </a>
            </nav>
          }
          main={
            <>
              <p className="type-title">Intake redesign</p>
              <p>The case study stays in the main column.</p>
            </>
          }
          aside={
            <aside className="panel" aria-label="Role">
              <p className="type-title">Role</p>
              <p>Product design for clinical tools.</p>
            </aside>
          }
        />
      </State>
    ),
  },
  {
    id: "responsive-grid",
    title: "Responsive grid",
    render: () => (
      <>
        {[
          ["Narrow, 4 columns, cards stack", "1fr"],
          ["Medium, 8 columns, two cards per row", "1fr 1fr"],
          ["Wide, 12 columns, four cards", null],
        ].map(([label, columns]) => (
          <State key={label} label={label} wide>
            <div className="cards" style={columns ? { gridTemplateColumns: columns } : undefined}>
              {card}
              {card}
              {card}
              {card}
            </div>
          </State>
        ))}
      </>
    ),
  },
  {
    id: "panel-expand-collapse",
    title: "Panel expand collapse",
    render: () => (
      <>
        <State label="Collapsed">
          <PanelExpandCollapse label="Methods">
            <p>Interviews with the care team, then a prototype of the results view.</p>
          </PanelExpandCollapse>
        </State>
        <State label="Expanded" wide>
          <PanelExpandCollapse label="Methods" defaultOpen>
            <p>Interviews with the care team, then a prototype of the results view.</p>
          </PanelExpandCollapse>
        </State>
      </>
    ),
  },
  {
    id: "form-layout",
    title: "Form layout",
    render: () => (
      <>
        <State label="Full page, primary first" wide>
          <Form>
            <Input id="name" label="Name" autoComplete="name" />
            <Input id="layout-email" label="Email address (required)" type="email" autoComplete="email" />
            <Textarea id="layout-message" label="Message" />
            <FormActions>
              <Button type="submit">Send message</Button>
              <Button variant="secondary">Cancel</Button>
            </FormActions>
          </Form>
        </State>
        <State label="Modal actions, primary at the right">
          <FormActions align="right">
            <Button variant="secondary">Cancel</Button>
            <Button>Save</Button>
          </FormActions>
        </State>
      </>
    ),
  },
  {
    id: "list-detail",
    title: "List detail",
    render: () => (
      <>
        <State label="Intake redesign selected" wide>
          <ListDetail
            label="Projects"
            defaultSelected="Intake redesign"
            items={[
              { title: "Intake redesign", body: "How a care team reads results without the noise." },
              { title: "Results view", body: "How results reach the care team." },
            ]}
          />
        </State>
        <State label="Nothing selected">
          <EmptyState title="Select a Project">Choose a project from the list to read it here.</EmptyState>
        </State>
      </>
    ),
  },
  {
    id: "error-handling",
    title: "Error handling",
    render: () => (
      <>
        <State label="Field error, submit stays available">
          <Input
            id="error-email"
            label="Email address (required)"
            type="email"
            defaultValue="ada@agency"
            error="Enter an email address with an @ and a domain."
          />
          <FormActions>
            <Button>Send message</Button>
          </FormActions>
        </State>
        <State label="Several fields" wide>
          <InlineMessage tone="error" title="Fix 2 fields before sending." icon={false}>
            <p>
              <TextLink href="#error-email">Email address</TextLink>
            </p>
          </InlineMessage>
        </State>
        <State label="Saved">
          <Flag tone="success" title="Project saved." />
        </State>
        <State label="Lost connection" wide>
          <Banner tone="warning" icon={false}>
            Warning. We've lost the connection. Your edits are saved on this device.
          </Banner>
        </State>
      </>
    ),
  },
];

export const GROUPS = [
  { id: "atoms", title: "Atoms", specimens: atoms },
  { id: "molecules", title: "Molecules", specimens: molecules },
  { id: "organisms", title: "Organisms", specimens: organisms },
  { id: "patterns", title: "Patterns", specimens: patterns },
];