BLOCKS 
Accordion 
    Documentation // Accordion This component serves as a container for an accordion item, comprising a summary and content sections. It uses the Context API to manage its state and to allow its children (Accordion.Summary and Accordion.Content) to access shared state and callbacks. History of accordion Show code Name	Description	Default Control id Optional ID for the accordion element, enhancing accessibility (a11y) by associating the accordion summary and content. If not provided, a unique ID will be generated automatically. This ID is crucial for screen readers and other assistive technologies to understand the relationship between the accordion header and content. string - expanded* Determines whether the accordion is currently expanded or collapsed. boolean - onChange* Callback function that is called when the accordion's state changes, such as when it is opened or closed. (expanded: boolean) => void -	- children* Children of the Accordion component. Pass Accordion.Summary and Accordion.Content as children to create a functional accordion structure. ReactNode
    Accordion.Content // Accordion.Content Renders the content part of an accordion, leveraging context to control visibility and animation. Utilizes calcMaxHeight for smooth height transitions during expand/collapse actions. Accordion summary This is Accordion.Content component, it is just body of Accordion.
    Accordion.Summary // Accordion.Summary AccordionSummary serves as the clickable header for an accordion section, toggling the visibility of the content. It incorporates an expand/collapse icon to visually indicate state. This component further extends Cell to provide a consistent UI and accessibility features. Accordion.Summary Accordion.Summary is Cell component, you can pass all the same props from Cell to it. Show code Name	Description	Default Control children Main content displayed as a header ReactNode - Accordion.Summary subhead Content displayed above the main content as a subheading ReactNode - hint Content displayed alongside the header as a hint ReactNode - titleBadge A badge component to be displayed next to the header ReactElement<BadgeProps, string | JSXElementConstructor<any>> -	- subtitle Content displayed below the header as a subtitle ReactNode - description Additional description displayed below the subtitle ReactNode - before Content or elements to be displayed on the left side of the cell ReactNode -	- after Content or elements to be displayed on the right side of the cell ReactNode -	- Component Custom component or HTML tag to be used as the root element of the cell, div by default ElementType - hovered Controls the hover state of the component externally, useful for keyboard navigation boolean - multiline Allows for multiline content without truncation boolean - interactiveAnimation "opacity" "background" - opacity background
Avatar
AvatarStack
Badge
Banner
Blockquote
Button // Button Renders a button or a button-like element with customizable properties, such as size, mode, and loading state. Supports adding icons or other elements before and after the text. Action Show code Name	Description	Default Control size Controls the size of the button, influencing padding and font size. "s" "m" "l" "m" s m l mode Defines the button's visual style, affecting its background and text color. "plain" "white" "outline" "bezeled" "gray" "filled" "filled" filled children - Action before Inserts a component before the button text, typically an icon. ReactNode -	- after Inserts a component after the button text, such as a badge or indicator. ReactNode -	- stretched If true, stretches the button to fill the width with its container. boolean - loading Displays a loading indicator in place of the button content when true. boolean - disabled Disables the button, preventing user interactions, when true. boolean - Component Specifies the root element type for the button, allowing for semantic customization or integration with routing libraries. ElementType button - STORIES With Icon Create channel Hide code <Button before={<Icon20Copy />} mode="filled" size="s" > Create channel </Button> Copy Link No hello Hide code <Button Component="a" href="https://nohello.net/en/" mode="filled" size="s" target="_blank" > No hello </Button>
Card

Cell
    Documentation
    ButtonCell
    Info
    Navigation

IconButton
Image

InlineButtons
    Documentation
    InlineButtons.Item


List
Placeholder

Section
    Documentation
    Section.Footer
    Section.Header

Steps

Timeline
    Documentation
    Timeline.Item

FEEDBACK
CircularProgress
Progress
Skeleton
Snackbar
Spinner
Spoiler

FORM
Checkbox
Chip
ColorInput
FileInput
Input
Multiselect
Multiselectable
PinInput
Radio
Rating
Select
Selectable
Slider
Switch
Textarea

LAYOUT
FixedLayout
Tabbar
    Documentation
    Tabbar.Item

MISC
Divider

NAVIGATION
Breadcrumbs
CompactPagination
    Documentation
    CompactPagination.Item
Pagination
SegmentedControl
    Documentation
    SegmentedControl.Item
TabsList
    Documentation
    TabsList.Item

OVERLAYS
Modal
    Documentation
    Modal.Close
    Modal.Header
Popper
Tooltip

TYPOGRAPHY
Caption
Headline
LargeTitle
Subheadline
Text
Title