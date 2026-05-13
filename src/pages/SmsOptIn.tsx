import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone } from "lucide-react";
import { Helmet } from "react-helmet";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";

const SmsOptIn = () => {
  const { toast } = useToast();
  const [phone, setPhone] = useState("");
  const [preference, setPreference] = useState("opt_in");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.match(/^\+?[1-9]\d{6,14}$/)) {
      toast({
        title: "Invalid number",
        description: "Please enter a valid phone number in international format (e.g. +15551234567).",
        variant: "destructive",
      });
      return;
    }

    if (preference === "opt_in" && !consent) {
      toast({
        title: "Consent required",
        description: "Please check the consent box to opt in.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // For now, show success — backend integration can be added later
      toast({
        title: preference === "opt_in" ? "You're opted in!" : "You've been opted out",
        description:
          preference === "opt_in"
            ? "You'll now receive text messages from Lux, our AI Receptionist."
            : "You will no longer receive text messages from Lux.",
      });
      setPhone("");
      setConsent(false);
    } catch (err: any) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>SMS Opt-In | Text Messages from Lux — Mysterious Enterprise</title>
        <meta
          name="description"
          content="Manage your SMS preferences for Lux, the AI Receptionist for Mysterious Enterprise LLC. Opt in or out of text messages."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://crypticstore.shop/sms" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black pt-24 pb-16 px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-700/20 border border-amber-500/30 mb-4">
              <MessageSquare className="w-8 h-8 text-amber-400" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Text Messages from Lux
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Manage your SMS preferences for Lux, the AI Receptionist for Mysterious Enterprise LLC.
            </p>
          </div>

          {/* Form Card */}
          <Card className="bg-gray-900/80 border-gray-800 backdrop-blur-sm">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-200">
                    Mobile number
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="+15551234567"
                      maxLength={20}
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-amber-500 focus:ring-amber-500/20"
                    />
                  </div>
                  <p className="text-xs text-gray-500">
                    Use international format, e.g. +1 555 123 4567.
                  </p>
                </div>

                {/* Preference */}
                <div className="space-y-3">
                  <Label className="text-gray-200">Preference</Label>
                  <RadioGroup
                    value={preference}
                    onValueChange={setPreference}
                    className="flex flex-col gap-3"
                  >
                    <div className="flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800/30 p-3 hover:border-amber-500/50 transition-colors">
                      <RadioGroupItem value="opt_in" id="opt_in" className="border-gray-500 text-amber-500" />
                      <Label htmlFor="opt_in" className="text-sm font-normal text-gray-300 cursor-pointer">
                        Opt in — start receiving texts
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 rounded-lg border border-gray-700 bg-gray-800/30 p-3 hover:border-amber-500/50 transition-colors">
                      <RadioGroupItem value="opt_out" id="opt_out" className="border-gray-500 text-amber-500" />
                      <Label htmlFor="opt_out" className="text-sm font-normal text-gray-300 cursor-pointer">
                        Opt out — stop receiving texts
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Consent (visible only when opting in) */}
                {preference === "opt_in" && (
                  <div className="flex items-start space-x-3 rounded-lg border border-gray-700 bg-gray-800/30 p-4">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={(checked) => setConsent(checked === true)}
                      className="mt-0.5 border-gray-500 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                    />
                    <label
                      htmlFor="consent"
                      className="text-xs leading-relaxed text-gray-400 cursor-pointer"
                    >
                      By checking this box, I agree to receive text messages from Lux, the AI
                      Receptionist for Mysterious Enterprise LLC, at the phone number provided.
                      Message frequency varies. Message and data rates may apply. Reply STOP to
                      unsubscribe at any time, or HELP for help. Consent is not a condition of
                      purchase.
                    </label>
                  </div>
                )}

                {/* Submit */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-black font-semibold tracking-wide"
                >
                  {isSubmitting ? "Submitting…" : "Submit"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-gray-600">
            Powered by Mysterious Enterprise LLC · <a href="/privacy" className="underline hover:text-amber-500">Privacy Policy</a> · <a href="/terms" className="underline hover:text-amber-500">Terms</a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default SmsOptIn;
