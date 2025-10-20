import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, ChevronRight } from 'lucide-react';
import Sidebar from './components/Sidebar';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Bienvenido a nuestro servicio de atención. ¿En qué puedo ayudarte?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [currentOptions, setCurrentOptions] = useState([
    { id: 1, text: '📞 Información de contacto', value: 'contacto' },
    { id: 2, text: '🕒 Horarios de atención', value: 'horarios' },
    { id: 4, text: '❓ Preguntas frecuentes', value: 'faq' },
    { id: 5, text: '🛠️ Soporte técnico', value: 'soporte' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const conversationFlows = {
    contacto: {
      response: 'Aquí está nuestra información de contacto:\n\n📧 Email: expoaquaguard@gmail.com\n📱 Teléfono: +506 6092-6616\n📍 Dirección: San José, Costa Rica',
      options: [
        { id: 1, text: '✉️ Enviar un correo', value: 'enviar_correo' },
        { id: 2, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    horarios: {
      response: 'Nuestros horarios de atención son:\n\n🗓️ Lunes a Viernes: 8:00 AM - 4:00 PM\n🗓️ Sábados: 10:00 AM - 2:00 PM\n🗓️ Domingos y Feriados: Cerrado',
      options: [
        { id: 1, text: '📅 Agendar una cita', value: 'agendar_cita' },
        { id: 2, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    faq: {
      response: 'Estas son nuestras preguntas más frecuentes:',
      options: [
        { id: 1, text: '¿Cómo creo una cuenta?', value: 'crear_cuenta' },
        { id: 2, text: '¿Dónde comprar los productos?', value: 'comprar' },
        { id: 3, text: '¿Hay garantía para los productos?', value: 'garantia' },
        { id: 4, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    soporte: {
      response: '¿Qué tipo de problema estás experimentando?',
      options: [
        { id: 1, text: '🔐 ¿Cómo instalo el filtro', value: 'instalacion' },
        { id: 2, text: '⚙️ ¿Cómo reemplazo la pastilla de carbón activado?', value: 'error_tecnico' },
        { id: 4, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    comprar: {
        response: 'Hacemos envíos a toda el Gran Área Metropolitana y puedes gestionar tu compra y envío a través de nuestro correo expoaquaguard@gmail.com',
        options: [
            { id: 1, text: '🏠 Volver al menú principal', value: 'menu_principal' }
        ]
    },
    enviar_correo: {
      response: 'Perfecto, puedes enviarnos un correo a expoaquaguard@gmail.com o usar nuestro formulario de contacto en la web. Te responderemos en menos de 24 horas. 📧',
      options: [
        { id: 1, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    agendar_cita: {
      response: 'Para agendar una cita, por favor llámanos al +506 6092-6616 o envía un correo con tu disponibilidad. ¡Te confirmaremos a la brevedad! 📅',
      options: [
        { id: 1, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    crear_cuenta: {
      response: 'Crear una cuenta es muy fácil:\n\n1. Haz clic en "Registrarse"\n2. Ingresa tu email y contraseña\n3. ¡Listo! Ya puedes comenzar a usar nuestros servicios',
      options: [
        { id: 1, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    garantia: {
      response: 'Sí, ofrecemos una garantía de 1 mes para todos nuestros productos en caso de reportar alguna falla.',
      options: [
        { id: 1, text: '📧 Aplicar garantía', value: 'enviar_correo' },
        { id: 2, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    instalacion: {
      response: 'Para instalar el filtro:\n\n1. Identifica la tubería del grifo de agua.\n2. Desconéctala por donde se conecta a otra tubería.\n3. Conecta el filtro a ámbos lados de la tubería.\n\nSi tienes problemas instalando el filtro, contáctanos directamente.',
      options: [
        { id: 1, text: '📧 Contactar soporte', value: 'enviar_correo' },
        { id: 2, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    error_tecnico: {
      response: 'Para hacer el reemplazo de la pastilla sigue los siguientes pasos: \n\n1. Abre la rendija del filtro\n2. Retira la pastilla desgastada.\n3. Introduce la nueva pastilla de carbón activado\n\nSi todavía tienes problemas con ello, contáctanos en soporte',
      options: [
        { id: 1, text: '📧 Contactar soporte', value: 'enviar_correo' },
        { id: 2, text: '🏠 Volver al menú principal', value: 'menu_principal' }
      ]
    },
    menu_principal: {
      response: '¿En qué más puedo ayudarte?',
      options: [
        { id: 1, text: '📞 Información de contacto', value: 'contacto' },
        { id: 2, text: '🕒 Horarios de atención', value: 'horarios' },
        { id: 4, text: '❓ Preguntas frecuentes', value: 'faq' },
        { id: 5, text: '🛠️ Soporte técnico', value: 'soporte' }
      ]
    }
  };

  const handleOptionClick = (optionText: string, optionValue: string) => {
    const userMessage = {
      id: messages.length + 1,
      text: optionText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentOptions([]);
    setIsTyping(true);

    setTimeout(() => {
      const flow = conversationFlows[optionValue as keyof typeof conversationFlows];
      
      if (flow) {
        const botMessage = {
          id: messages.length + 2,
          text: flow.response,
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMessage]);
        setCurrentOptions(flow.options);
      }
      
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <div className='flex'>
        <Sidebar />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl h-[700px] flex flex-col overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-3 rounded-full">
                    <Bot className="w-6 h-6" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-lg">Asistente Virtual</h3>
                    <p className="text-sm text-blue-100">En línea • Responde en segundos</p>
                    </div>
                </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
                {messages.map((message) => (
                    <div
                    key={message.id}
                    className={`flex items-start gap-2 ${
                        message.sender === 'user' ? 'flex-row-reverse' : ''
                    }`}
                    >
                    <div
                        className={`p-2 rounded-full flex-shrink-0 ${
                        message.sender === 'user'
                            ? 'bg-blue-600'
                            : 'bg-gray-300'
                        }`}
                    >
                        {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                        ) : (
                        <Bot className="w-4 h-4 text-gray-700" />
                        )}
                    </div>
                    <div
                        className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                            ? 'bg-blue-600 text-white rounded-tr-none'
                            : 'bg-white text-gray-800 rounded-tl-none shadow-sm'
                        }`}
                    >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p
                        className={`text-xs mt-1 ${
                            message.sender === 'user'
                            ? 'text-blue-200'
                            : 'text-gray-500'
                        }`}
                        >
                        {message.timestamp.toLocaleTimeString('es-ES', {
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                        </p>
                    </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex items-start gap-2">
                    <div className="p-2 rounded-full bg-gray-300">
                        <Bot className="w-4 h-4 text-gray-700" />
                    </div>
                    <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
                        <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                    </div>
                    </div>
                )}

                {currentOptions.length > 0 && !isTyping && (
                    <div className="space-y-3 mt-4">
                    {currentOptions.map((option) => (
                        <button
                        key={option.id}
                        onClick={() => handleOptionClick(option.text, option.value)}
                        className="w-full bg-white hover:bg-blue-50 border-2 border-blue-600 text-blue-600 rounded-xl px-5 py-4 text-sm font-medium transition-all flex items-center justify-between group shadow-sm hover:shadow-md"
                        >
                        <span className="text-left">{option.text}</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    ))}
                    </div>
                )}

                <div ref={messagesEndRef} />
                </div>

                <div className="p-6 bg-white border-t border-gray-200">
                <div className="text-center text-sm text-gray-500">
                    Selecciona una opción para continuar la conversación
                </div>
                </div>
            </div>
            </div>
    </div>
  );
}