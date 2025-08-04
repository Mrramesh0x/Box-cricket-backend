import axios from "axios"
export const Sendname = async (req,res)=>{
const {name,number,date, member, timeslot} = req.body;
try {
    if(name || number || date || member || timeslot){
        return res.status(200).json({message: 'Data sent', name,number,date,member,timeslot})
    }
    else{
        return res.status(400).json({message: "ALL FIELDS REQUIRED"})
    }
} catch (error) {
   return res.status(400).json('ERROR', error)
}

}
export const getSlip = async (req,res) => {
    const {imageUrl,name,number,date,timeslot,member,amount,bookingId} = req.body;
    const botToken = "8400575743:AAH3NTTTE7GrnVs-ItWBQpgflGE5z6MVdfM";
  const chatId = "1236722194";
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendPhoto`;

 try {
    const telegramRes = await axios.post(telegramUrl, {
      chat_id: chatId,
      photo: imageUrl,
      caption: `Name ${name} , Number ${number}, Date ${date}, Time ${timeslot},Total Member ${member}, Total Amount ${amount} BookingID ${bookingId}`
    });

    return res.status(200).json({ message: "Slip sent to Telegram" }); // ✅ Send response back
  } catch (error) {
    console.error("Telegram Error:", error.response?.data || error.message);
    return res.status(500).json({ message: "Failed to send to Telegram" }); // ✅ Send error response
  }

}