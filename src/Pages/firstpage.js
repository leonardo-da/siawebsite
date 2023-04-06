import '../App.css'
import { Card,Button,Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";

import IMG0 from '../assets/img/remoto.png';
import IMG1 from '../assets/img/coninm.png';
import IMG2 from '../assets/img/pago.png';

import IMG3 from '../assets/img/pcgamer.png';
import IMG4 from '../assets/img/videojuegos.png';
import IMG5 from '../assets/img/allalto.png';
import IMG6 from '../assets/img/almacenamiento.png';
import IMG7 from '../assets/img/mouseytec.png';
import IMG8 from '../assets/img/componentes.png';
import IMG9 from '../assets/img/office.png';
import IMG10 from '../assets/img/toner.png';
import IMG11 from '../assets/img/tinta.png';


const App = () => {

  const [show, setShow] = useState(false);

  const totop = (event) => {
    window.scrollTo(0, 0);
}

  return (
    <>
    <div style={{ marginTop:'6.4rem' }}>
      <div className="my-5 pt-4">
        <h1 className='ms-5 mb-5'>Todo en relación para tus equipos de cómputo.</h1>
        <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          slidesPerView={5}
          spaceBetween={30}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src={IMG3} alt="info"></img>PC's</SwiperSlide>
          <SwiperSlide><img src={IMG4} alt="info"></img>Portatiles</SwiperSlide>
          <SwiperSlide><img src={IMG5} alt="info"></img>All in one</SwiperSlide>
          <SwiperSlide><img src={IMG6} alt="info"></img>Almacenamiento</SwiperSlide>
          <SwiperSlide><img src={IMG7} alt="info"></img>Periféricos</SwiperSlide>
          <SwiperSlide><img src={IMG8} alt="info"></img>Componentes</SwiperSlide>
          <SwiperSlide><img src={IMG9} alt="info"></img>Software</SwiperSlide>
          <SwiperSlide><img src={IMG10} alt="info"></img>Toners</SwiperSlide>
          <SwiperSlide><img src={IMG11} alt="info"></img>Tintas</SwiperSlide>
        </Swiper>

        <div className='d-flex justify-content-evenly mt-5'>
          <Button className='w-25 bg-secondary border-0 ' onClick={totop} as={Link} to="/productos" variant="primary">Ver todo</Button>    
        </div>
      </div>

      <div className="py-5" style={{background:'#636363'}}>
        <h1 className='ms-5 mb-5 text-white'>Servicios para tus equipos y/o tu empresa</h1>
        <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
          slidesPerView={4}
          spaceBetween={30}
          modules={[Autoplay, Pagination]}
          className="mySwiper text-white"
        >
          <SwiperSlide style={{background:'#636363'}}><img src={IMG3} alt="info"></img>PC's</SwiperSlide>
          <SwiperSlide style={{background:'#636363'}}><img src={IMG4} alt="info"></img>Portatiles</SwiperSlide>
          <SwiperSlide style={{background:'#636363'}}><img src={IMG5} alt="info"></img>All in one</SwiperSlide>
          <SwiperSlide style={{background:'#636363'}}><img src={IMG6} alt="info"></img>Almacenamiento</SwiperSlide>
          <SwiperSlide style={{background:'#636363'}}><img src={IMG7} alt="info"></img>Periféricos</SwiperSlide>
          <SwiperSlide style={{background:'#636363'}}><img src={IMG8} alt="info"></img>Componentes</SwiperSlide>
          <SwiperSlide style={{background:'#636363'}}><img src={IMG9} alt="info"></img>Software</SwiperSlide>
          <SwiperSlide style={{background:'#636363'}}><img src={IMG10} alt="info"></img>Toners</SwiperSlide>
          <SwiperSlide style={{background:'#636363'}}><img src={IMG11} alt="info"></img>Tintas</SwiperSlide>
        </Swiper>

        <div className='d-flex justify-content-evenly mt-5'>
          <Button className='w-25 bg-secondary border-0 ' onClick={totop} as={Link} to="/servicios" variant="primary">Ver todo</Button>    
        </div>
      </div>
      
      
      <div>
      <h4 className="mb-5">´</h4>
        <div>
          <h3 className="text-center m-2 " >Los productos y servicios de la mejor calidad para tus equipos e Impresoras.</h3>
        <div>
        <Container>
        <div data-aos="zoom-in-up" className='mt-5 d-flex justify-content-evenly text-center'>
          <Card style={{ width: '18rem'}} className="border-0" >
            <Card.Img className="w-50 mx-auto mt-3" variant="top" src={IMG0} />
              <Card.Body>
                <Card.Title id='tc' >Asistencia remota</Card.Title>
                <Card.Text id='txc' >
                  Ayuda sin la necesidad de acudir al negocio.
                </Card.Text>
                <Card.Text id='txc' className="mb-4 " >
                  *Aplicable en algunos servicios.
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem'}} className="border-0">
            <Card.Img className="w-50 mx-auto mt-3" variant="top" src={IMG1} />
              <Card.Body>
                <Card.Title id='tc' >Contacto inmediato</Card.Title>
                <Card.Text id='txc' className="mb-4 ">
                  Nos contactaremos lo más rápido nos sea posible.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem'}} className="border-0">
            <Card.Img className="w-50 mx-auto mt-3" variant="top" src={IMG2} />
              <Card.Body>
                <Card.Title id='tc'>Opciones de pago</Card.Title>
                <Card.Text id='txc' className="mb-4 ">
                  Contamos con terminal, al igual que transferencia para su comodidad.
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
        <div data-aos="zoom-in-up" className='d-flex justify-content-evenly'>
          <Button className='w-25 text-white border-0  mb-5 bg-secondary' onClick={() => setShow(true)}>Nuestro aviso de privacidad</Button>

          <Modal
          show={show}
          onHide={() => setShow(false)}
          size='xl'
          >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Aviso de privacidad
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
            SERVICIOS INFORMATICOS DE AGUASCALIENTES, con domicilio en calle AV. INDEPENDENCIA 1926-1, colonia TROJES DE ORIENTE, ciudad AGUASCALIENTES, municipio o delegación AGUASCALIENTES, c.p. 20115, en la entidad de AGUASCALIENTES, país MEXICO, y portal de internet www.serviciosinformaticosdeags.com, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:<br/><br/>
            ¿Para qué fines utilizaremos sus datos personales? Servicios Informáticos de Aguascalientes, <b>(Sia)</b> con domicilio en Av. Independencia 1926-1, Col. Trojes de Oriente, es responsable de recabar sus datos personales, del uso que se le dé a los mismos y de su protección.
            Su información personal será utilizada para proveer los servicios y productos que ha solicitado, informarle sobre cambios en los mismos y evaluar la calidad del servicio que le brindamos.<br/>
            Para las finalidades antes mencionadas, requerimos obtener los siguientes datos personales: Nombres y Apellidos, e-mail, dirección, teléfono(s), Código postal, considerado como sensible según la Ley Federal de Protección de Datos Personales.<br/>
            Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, así como de oponerse al tratamiento de los mismos o revocar el consentimiento que para tal fin nos haya otorgado, a través de los procedimientos que hemos implementado. Para conocer dichos procedimientos, los requisitos y plazos, se puede poner en contacto con nuestro departamento de datos personales en info@serviciosinformaticosdeags.com, 01 (449) 9156234 o visitar nuestra página de Internet www.serviciosinformaticosdeags.com.<br/>
            Asimismo, le informamos que sus datos personales pueden ser transferidos y tratados dentro y fuera del país, por personas distintas a esta empresa. En ese sentido, su información puede ser compartida con empresas de mensajería, para realizar el manejo y envió de mercancía comprada. Si usted no manifiesta su oposición para que sus datos personales sean transferidos, se entenderá que ha otorgado su consentimiento para ello.<br/>
            Si usted desea dejar de recibir mensajes promocionales de nuestra parte puede solicitarlo a través de 01 (449) 9156234 o al correo info@serviciosinformaticosdeags.com Cualquier modificación a este aviso de privacidad podrá consultarla en www.serviciosinformaticosdeags.com<br/>
            Si tienes preguntas o dudas con respecto a la Política de Privacidad de <b>Sia</b> o nuestro sistema de procesamiento de datos, puedes contactarnos.<br/>
            Este Aviso de Privacidad contempla en todo momento los principios de licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad en el tratamiento de los datos personales.<br/><br/>
            <b>Sia</b> se compromete a que los datos personales tendrán un nivel de protección adecuado, para garantizar la seguridad, integridad y privacidad de los datos personales recopilados.<br/><br/><br/>
            </p>

            <p>
              <h2>Tratamiento</h2><br/>
            <b>Sus datos personales serán utilizados para las siguientes finalidades:</b><br/>
            <ul>
              <li>Proveer información sobre servicios y productos requeridos.</li>
              <li>Informar sobre nuevos productos o servicios que estén relacionados con el contratado o adquirido.</li>
              <li>Informar sobre cambios de nuestros productos o servicios.</li>
              <li>Proveer soporte o apoyo operativo.</li>
              <li>Brindar capacitación.</li>
              <li>Comunicación de promociones y novedades.</li>
            </ul>

            Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente, cuando visita nuestro sitio de Internet o utiliza nuestros servicios en línea, y cuando obtenemos información a través de otras fuentes que están permitidas por la ley.<br/>
            Usted puede dejar de recibir correos electrónicos con noticias de promociones, boletines informativos y novedades, solo debe responder el correo que recibió y dirigirlo a info@serviciosinformaticosdeags.com con el siguiente título “Eliminar boletín informativo”. Después de un lapso de 20 días usted ya no recibirá noticias de promociones, boletines informativos y novedades.<br/><br/>
            <b>Sia</b> no solicita datos personales sensibles.<br/><br/>
            </p>

            <p>
            <h2>Acceso, Rectificación, Cancelación y Oposición.</h2>
            Usted tiene el derecho de acceder a sus datos personales en posesión de Sia, a los detalles del tratamiento de los mismos, rectificarlos en caso de ser inexactos, pedir su cancelación cuando considere que resulten excesivos o innecesarios para las finalidades que justificaron su obtención u oponerse al tratamiento de los mismos para fines específicos.<br/>
            Asimismo, le informamos que sus datos personales pueden ser transferidos y tratados dentro y fuera del país, por personas distintas a esta empresa. En ese sentido, su información puede ser compartida con empresas de mensajería, para realizar el manejo y envió de mercancía comprada. Si usted no manifiesta su oposición para que sus datos personales sean transferidos, se entenderá que ha otorgado su consentimiento para ello.<br/>
            Los mecanismos que se han implementado para el ejercicio de dichos derechos son a través de la presentación de la solicitud respectiva en nuestro Departamento de Seguridad de Información ubicado en Av. Independencia 1926-1, Col. Trojes de Oriente, en Aguascalientes, Ags. Para mayor información, favor de comunicarse con el Departamento de Seguridad de Información al 01 (449) 9156234 o vía correo electrónico a info@serviciosinformaticosdeags.com<br/>
            En todo momento usted podrá revocar el consentimiento que nos ha otorgado para el tratamiento de sus datos personales, a fin de que dejemos de hacer uso de los mismos. Para ello, es necesario que presente su solicitud en las instalaciones de <b>Sia</b>.<br/><br/>
            
            Para cualquiera de los casos anteriormente mencionados la Solicitud de Derechos deberá ir acompañada de la siguiente información:<br/>
            <ul>
              <li>Los documentos que acrediten la identidad o, en su caso, la representación legal del titular, pueden ser credencial de elector, pasaporte, entre otros (original y copia)</li>
              <li>Información de contacto como lo puede ser una dirección de correo electrónico, número telefónico o dirección física para comunicarle la respuesta a su solicitud.</li>
              <li>Así también el documento deberá contener la descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados y cualquier otro elemento o documento que facilite la localización de los datos personales.</li>
            </ul><br/>
            Tendremos un plazo máximo de 20 días para atender su petición y le informaremos sobre la procedencia de la misma al teléfono y/o dirección de correo electrónico que nos haya indicado.<br/>
            En caso de que el titular haya realizado algún pedido, estos datos no podrán ser rectificados, cancelados ni oponerse al tratamiento de los mismos ya que son necesarios para la realización de dicho pedido y todos sus efectos administrativos, legales y fiscales, correspondientes.<br/><br/>
            </p>
            <p>
            <h2>Transferencia y remisión de datos personales</h2><br/>
            <b>Sia</b> no hace ninguna transferencia ni remisión sobre sus datos personales.<br/><br/>
            </p>
            <p>
            <h2>Cambios en el aviso de privacidad</h2><br/>
              Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas o jurisprudenciales, políticas internas, nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios o productos y prácticas del mercado.<br/>
              Estas modificaciones estarán disponibles al público a través de la página: www.serviciosinformaticosdeags.com<br/><br/>
            </p>
            <p>
            <h2>Aceptación de los términos</h2><br/>
            Esta declaración de Confidencialidad / Privacidad está sujeta a los términos y condiciones de todos los sitios Web de <b>Sia</b>, lo cual constituye un acuerdo legal entre el usuario y Sia. Si el usuario utiliza los servicios en cualquiera de los sitios de <b>Sia</b>, significa que ha leído, entendido y acordado los términos antes expuestos. <br/><br/>
            </p>
            <p>
            <h2>¿Dónde puedo consultar el aviso de privacidad integral?</h2><br/>
            Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral en: www.serviciosinformaticosdeags.com
            </p>

          </Modal.Body>
        </Modal>
        </div>
        </Container>
      </div>
        </div>
      </div>
      </div>
      
      </>
  );
}

export default App;