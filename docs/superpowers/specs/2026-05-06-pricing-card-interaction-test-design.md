# PricingCard Interaction Test — Design Spec

**Date:** 2026-05-06  
**Branch:** feat/pricing-card-interaction-test  
**Status:** Approved

## Goal

Add a Storybook interaction test to `PricingCard` that demonstrates why interaction testing is useful: simulate a real user action (clicking the CTA) and assert a resulting DOM state change.

## Component Changes — `PricingCard.tsx`

Add internal `selected` state via `useState(false)`. No new props.

**On click:**
- `selected` flips from `false` to `true` (one-way; clicking again does nothing)
- The CTA `Button` receives `onClick={() => setSelected(true)}`

**When `selected === true`:**
- Card border becomes `border-2 border-emerald-500` (distinct from the indigo "featured" border)
- A `<Badge variant="success">Selected</Badge>` appears below the existing badge area at the top of the card

**When `selected === false`:** no change to existing rendering.

## Story Changes — `PricingCard.stories.tsx`

Add a new exported story: `SelectCard`.

```ts
export const SelectCard: Story = {
  args: {
    tier: 'Pro',
    // same args as Pro story...
    featured: false,  // start clean, no featured badge, so the Selected badge is unambiguous
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Step 1: Find the CTA button by its accessible role + name
    const cta = canvas.getByRole('button', { name: /get started/i });

    // Step 2: Click it
    await userEvent.click(cta);

    // Step 3: Assert the Selected badge appeared
    expect(canvas.getByText('Selected')).toBeInTheDocument();
  },
};
```

Imports needed: `userEvent`, `expect`, `within` from `@storybook/test`.

## What this demonstrates

| Without interaction tests | With interaction tests |
|---|---|
| Stories only show static snapshots | Stories can simulate real user flows |
| Visual regression catches pixel diffs | Interaction tests catch broken wiring (missing onClick, wrong disabled state) |
| Have to open browser and click manually to verify | Play function runs automatically in CI |

## Out of scope

- Toggle / deselect behaviour
- Parent-controlled `selected` prop
- Multiple-card coordination (only one selected at a time)
