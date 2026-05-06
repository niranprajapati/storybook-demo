# Storybook Demo

A component library scaffold for the Storybook live demo session.

## Running Storybook

```bash
npm install
npm run storybook
```

Opens at http://localhost:6006.

## Running Chromatic

Set your project token, then run:

```bash
CHROMATIC_PROJECT_TOKEN=<your-token> npm run chromatic
```

The token is available in your Chromatic dashboard at chromatic.com. Do not commit it to the repo — pass it as an environment variable at runtime.

## Demo Flow

### 1. Button stories (~10 min)

Open `Components/Button` in the sidebar. Walk through the variant stories (`Primary`, `Secondary`, `Ghost`, `Destructive`), then state stories (`Loading`, `Disabled`), then icon stories, then size stories. Finish on `Playground` and scrub `variant`, `size`, `loading`, and `disabled` with controls to show live updates.

### 2. Badge + PriceTag (~5 min)

Quick tour of `Components/Badge` and `Components/PriceTag`. Point out that Storybook works at any scale — these are small atoms, not full views. Scrub the `size` control on `PriceTag/Playground` to show the amount scaling.

### 3. PricingCard (~10 min)

Open `Components/PricingCard`. Walk through `Starter`, `Pro` (featured), and `Enterprise`. Open `PricingCard.tsx` in your editor and show the imports — it pulls in `Button`, `Badge`, and `PriceTag` directly. On `Playground`, toggle `featured` to watch the badge appear and the accent border activate. Swap `ctaVariant` to show child components reacting.

### 4. PricingGrid (~5 min)

Open `Components/PricingGrid` → `ThreeTier`. This is the assembled full view — three cards rendered from a single story. Point out that this story composes components, not other stories.

### 5. Chromatic (~15 min)

1. Run the baseline (see Running Chromatic above)
2. Make the planted change (see below)
3. Run Chromatic again
4. Open the Chromatic UI and review the diffs — approve or deny each one

## The Planted Regression

After the baseline Chromatic run, open `src/components/PricingCard/PricingCard.tsx` and find the line marked with a comment (look for `p-6`). Change it to `p-8`.

This change will surface as a visual diff across:

- `PricingCard/Starter`
- `PricingCard/Pro`
- `PricingCard/Enterprise`
- `PricingGrid/ThreeTier` — all three cards in a single diff screenshot

**Ship the repo with `p-6` as the baseline. Do not commit the `p-8` change — it is made live during the demo.**
