export default function CalendarPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Book a Visit</h1>
      <div className="h-[700px]">
        <iframe
          src="https://calendly.com/YOUR_USERNAME"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Calendly Booking"
        />
      </div>
    </div>
  );
}
