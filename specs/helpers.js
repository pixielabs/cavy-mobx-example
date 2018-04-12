export async function containsText(component, text) {
  if (!component.props.children.includes(text)) {
    throw new Error(`Could not find text ${text}`);
  };
}
