import Button from "../Ui/Button";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="primary">Requests</Button>
      <Button variant="secondary">Contact Us</Button>
    </div>
  );
}
