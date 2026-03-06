import Container from "@/components/Container";
import Card from "@/components/Card";

export default function AboutPage() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-2xl font-semibold">About</h1>
          <p className="mt-2 max-w-3xl leading-relaxed text-neutral-600">
            This site is a knowledge network for learning. Students explore concepts as connected nodes,
            then add explanations, examples and check questions in their own words.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="p-5">
                <div className="text-sm font-semibold">How to use it</div>
                <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-neutral-600">
                  <li>Search a keyword in Explore</li>
                  <li>Open a node and read its connections</li>
                  <li>Follow two links and describe the relationship</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-5">
                <div className="text-sm font-semibold">How to improve it</div>
                <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-neutral-600">
                  <li>Add explanations in the JSON file</li>
                  <li>Keep explanations short and clear</li>
                  <li>Add one example and one check question per node</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
