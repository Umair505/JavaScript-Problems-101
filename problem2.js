// 1-> [ফাংশন নেম দিতে হবে AnaToVori ]:একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা। তারপর সেটাকে ভরি তে convert  করে কত মান হয় সেই সংখ্যা রিটার্ন করবে।শুধু সংখ্যাটা রিটার্ন করবে
function AnaToVori(Ana)
{
    if(typeof Ana != "number" ||Ana < 0)
    {
        return("Please provide a valid number");
    }
    return Ana*0.0625;   
}
console.log(AnaToVori(6));
console.log(AnaToVori(16));