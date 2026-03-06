import Container from "@/components/Container";
import Card from "@/components/Card";

export default function AboutPage() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-3xl font-semibold tracking-tight">About this app</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-neutral-600">
            This version is designed as a learning experience first. Students begin with guided journeys,
            learn through key concepts and reflective prompts, then explore a deeper network of 1001 nodes.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="p-5">
                <div className="text-sm font-semibold">How students learn here</div>
                <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-neutral-600">
                  <li>Start with a journey and an essential question</li>
                  <li>Read key concepts in a simple learning format</li>
                  <li>Follow connections into deeper exploration</li>
                  <li>Respond to learning challenges and prompts</li>
                </ul>
              </div>
            </Card>

            <Card>
              <div className="p-5">
                <div className="text-sm font-semibold">How teachers can use it</div>
                <ul className="mt-2 list-disc pl-5 text-sm leading-relaxed text-neutral-600">
                  <li>Use journeys as lesson sequences</li>
                  <li>Assign node explanations in student voice</li>
                  <li>Use challenges for project-based learning</li>
                  <li>Extend learning with the wider graph search</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}
