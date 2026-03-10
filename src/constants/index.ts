// Use dynamic WhatsApp number from env or fallback
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5548999009426";
export const WHATSAPP_MESSAGE =
  "Olá, achei teu site e gostaria de agendar uma consulta com voce";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const SITE_META = {
  title: "Avelino Fisioterapia | Cuidado Premium em Fisioterapia",
  description:
    "Transforme seu recomeço. Fisioterapia especializada com equipamento Ez Body e atendimento focado no bem-estar através do movimento inteligente.",
  instagramUrl: "https://www.instagram.com/livianeavelino/",
};
