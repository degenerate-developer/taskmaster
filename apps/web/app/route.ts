import { redirect } from "next/navigation";
import { getOrCreateIntake } from "./apply/_store/redis-intake";

export async function GET() {
  const intakeId = await getOrCreateIntake();
  redirect(`/apply?s=${intakeId}`);
}
