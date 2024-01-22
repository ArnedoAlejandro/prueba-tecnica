import "./styleClientes.css";
import daniela from "../../assets/daniela.png";
import ruben from "../../assets/ruben.png";
import mariana from "../../assets/mariana.png";
import julio from "../../assets/julio.png";

const Clientes = () => {
  return (
    <section>
      <p className="accion">Acciones rapidas</p>
      <div className="container-info">
        <div className="clientes">
          <div className="header-client">
            <p>
              Clientes <span>Vista rapida</span>
            </p>
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 7.5H13.25C13.4489 7.5 13.6397 7.57902 13.7803 7.71967C13.921 7.86032 14 8.05109 14 8.25C14 8.44891 13.921 8.63968 13.7803 8.78033C13.6397 8.92098 13.4489 9 13.25 9H5.75C5.55109 9 5.36032 8.92098 5.21967 8.78033C5.07902 8.63968 5 8.44891 5 8.25C5 8.05109 5.07902 7.86032 5.21967 7.71967C5.36032 7.57902 5.55109 7.5 5.75 7.5ZM5.75 12.5H13.25C13.4489 12.5 13.6397 12.579 13.7803 12.7197C13.921 12.8603 14 13.0511 14 13.25C14 13.4489 13.921 13.6397 13.7803 13.7803C13.6397 13.921 13.4489 14 13.25 14H5.75C5.55109 14 5.36032 13.921 5.21967 13.7803C5.07902 13.6397 5 13.4489 5 13.25C5 13.0511 5.07902 12.8603 5.21967 12.7197C5.36032 12.579 5.55109 12.5 5.75 12.5ZM1.75 2.5H8.25C8.44891 2.5 8.63968 2.57902 8.78033 2.71967C8.92098 2.86032 9 3.05109 9 3.25C9 3.44891 8.92098 3.63968 8.78033 3.78033C8.63968 3.92098 8.44891 4 8.25 4H1.75C1.55109 4 1.36032 3.92098 1.21967 3.78033C1.07902 3.63968 1 3.44891 1 3.25C1 3.05109 1.07902 2.86032 1.21967 2.71967C1.36032 2.57902 1.55109 2.5 1.75 2.5ZM2 14C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13C1 12.7348 1.10536 12.4804 1.29289 12.2929C1.48043 12.1054 1.73478 12 2 12C2.26522 12 2.51957 12.1054 2.70711 12.2929C2.89464 12.4804 3 12.7348 3 13C3 13.2652 2.89464 13.5196 2.70711 13.7071C2.51957 13.8946 2.26522 14 2 14ZM3 8C3 8.26522 2.89464 8.51957 2.70711 8.70711C2.51957 8.89464 2.26522 9 2 9C1.73478 9 1.48043 8.89464 1.29289 8.70711C1.10536 8.51957 1 8.26522 1 8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7C2.26522 7 2.51957 7.10536 2.70711 7.29289C2.89464 7.48043 3 7.73478 3 8ZM13.314 4.918L11.07 2.417C11.0377 2.38106 11.0166 2.33655 11.0091 2.28884C11.0016 2.24113 11.008 2.19227 11.0277 2.14816C11.0474 2.10405 11.0794 2.06659 11.1199 2.0403C11.1604 2.014 11.2077 2.00001 11.256 2H15.744C15.7923 2.00001 15.8396 2.014 15.8801 2.0403C15.9206 2.06659 15.9526 2.10405 15.9723 2.14816C15.992 2.19227 15.9984 2.24113 15.9909 2.28884C15.9834 2.33655 15.9623 2.38106 15.93 2.417L13.686 4.917C13.6626 4.94311 13.6339 4.96398 13.6018 4.97828C13.5698 4.99257 13.5351 4.99996 13.5 4.99996C13.4649 4.99996 13.4302 4.99257 13.3982 4.97828C13.3661 4.96398 13.3374 4.94311 13.314 4.917V4.918Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="user">
            <div className="avatar">
              <img src={daniela} alt="Nombre Descriptivo" />
              <p>Daniela Amaya</p>
            </div>
            <p className="date">20/10/2023</p>
            <div className="pesos">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.22222 2.83334C0.996528 2.83334 0 3.82987 0 5.05557V13.9445C0 15.1701 0.996528 16.1667 2.22222 16.1667H17.7778C19.0035 16.1667 20 15.1701 20 13.9445V5.05557C20 3.82987 19.0035 2.83334 17.7778 2.83334H2.22222ZM9.44444 7.27779H17.2222C17.5278 7.27779 17.7778 7.52779 17.7778 7.83334C17.7778 8.1389 17.5278 8.3889 17.2222 8.3889H9.44444C9.13889 8.3889 8.88889 8.1389 8.88889 7.83334C8.88889 7.52779 9.13889 7.27779 9.44444 7.27779ZM8.88889 11.1667C8.88889 10.8611 9.13889 10.6111 9.44444 10.6111H17.2222C17.5278 10.6111 17.7778 10.8611 17.7778 11.1667C17.7778 11.4722 17.5278 11.7222 17.2222 11.7222H9.44444C9.13889 11.7222 8.88889 11.4722 8.88889 11.1667ZM5.69444 5.8889V6.37154C5.95486 6.4132 6.20139 6.47223 6.42708 6.53473C6.79861 6.63195 7.01736 7.0139 6.92014 7.38543C6.82292 7.75696 6.44097 7.97571 6.06944 7.87848C5.6875 7.77779 5.31945 7.70487 4.98611 7.69793C4.71181 7.69446 4.43056 7.76043 4.23958 7.87154C4.07292 7.96876 4.02431 8.06598 4.02431 8.19445C4.02431 8.25695 4.02778 8.31598 4.20833 8.42709C4.42708 8.55904 4.74653 8.65973 5.19097 8.79168L5.21528 8.79862C5.60417 8.91668 6.10417 9.06598 6.50347 9.31946C6.95139 9.60071 7.34722 10.059 7.35764 10.7639C7.36806 11.4896 6.99306 12.0174 6.49653 12.3264C6.24653 12.4826 5.96875 12.5799 5.69097 12.6389V13.1111C5.69097 13.4931 5.37847 13.8056 4.99653 13.8056C4.61458 13.8056 4.30208 13.4931 4.30208 13.1111V12.6042C3.94444 12.5278 3.60764 12.4132 3.32292 12.3125C3.25 12.2882 3.18056 12.2639 3.11111 12.2396C2.74653 12.1181 2.55208 11.7257 2.67361 11.3611C2.79514 10.9965 3.1875 10.8021 3.55208 10.9236C3.63889 10.9514 3.72222 10.9826 3.80208 11.007C4.27431 11.1667 4.63542 11.2882 5.02083 11.3021C5.31945 11.3125 5.59375 11.2465 5.76389 11.1389C5.90625 11.0521 5.97222 10.9479 5.96875 10.7743C5.96875 10.6736 5.94097 10.6007 5.76389 10.4896C5.54514 10.3507 5.22917 10.25 4.79167 10.1181L4.73264 10.1007C4.35417 9.98612 3.87847 9.84376 3.49653 9.61459C3.05556 9.34723 2.64236 8.90279 2.63889 8.2014C2.63542 7.46876 3.04861 6.96182 3.53472 6.67709C3.77431 6.53473 4.03819 6.44098 4.30556 6.38195V5.8889C4.30556 5.50695 4.61806 5.19445 5 5.19445C5.38194 5.19445 5.69444 5.50695 5.69444 5.8889Z"
                  fill="white"
                />
              </svg>

              <p>100 Bs.</p>
            </div>
          </div>
          <div className="user">
            <div className="avatar">
              <img src={ruben} alt="Nombre Descriptivo" />
              <p>Ruben Gonzalez</p>
            </div>
            <p className="date">20/10/2023</p>
            <div className="pesos">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.22222 2.83334C0.996528 2.83334 0 3.82987 0 5.05557V13.9445C0 15.1701 0.996528 16.1667 2.22222 16.1667H17.7778C19.0035 16.1667 20 15.1701 20 13.9445V5.05557C20 3.82987 19.0035 2.83334 17.7778 2.83334H2.22222ZM9.44444 7.27779H17.2222C17.5278 7.27779 17.7778 7.52779 17.7778 7.83334C17.7778 8.1389 17.5278 8.3889 17.2222 8.3889H9.44444C9.13889 8.3889 8.88889 8.1389 8.88889 7.83334C8.88889 7.52779 9.13889 7.27779 9.44444 7.27779ZM8.88889 11.1667C8.88889 10.8611 9.13889 10.6111 9.44444 10.6111H17.2222C17.5278 10.6111 17.7778 10.8611 17.7778 11.1667C17.7778 11.4722 17.5278 11.7222 17.2222 11.7222H9.44444C9.13889 11.7222 8.88889 11.4722 8.88889 11.1667ZM5.69444 5.8889V6.37154C5.95486 6.4132 6.20139 6.47223 6.42708 6.53473C6.79861 6.63195 7.01736 7.0139 6.92014 7.38543C6.82292 7.75696 6.44097 7.97571 6.06944 7.87848C5.6875 7.77779 5.31945 7.70487 4.98611 7.69793C4.71181 7.69446 4.43056 7.76043 4.23958 7.87154C4.07292 7.96876 4.02431 8.06598 4.02431 8.19445C4.02431 8.25695 4.02778 8.31598 4.20833 8.42709C4.42708 8.55904 4.74653 8.65973 5.19097 8.79168L5.21528 8.79862C5.60417 8.91668 6.10417 9.06598 6.50347 9.31946C6.95139 9.60071 7.34722 10.059 7.35764 10.7639C7.36806 11.4896 6.99306 12.0174 6.49653 12.3264C6.24653 12.4826 5.96875 12.5799 5.69097 12.6389V13.1111C5.69097 13.4931 5.37847 13.8056 4.99653 13.8056C4.61458 13.8056 4.30208 13.4931 4.30208 13.1111V12.6042C3.94444 12.5278 3.60764 12.4132 3.32292 12.3125C3.25 12.2882 3.18056 12.2639 3.11111 12.2396C2.74653 12.1181 2.55208 11.7257 2.67361 11.3611C2.79514 10.9965 3.1875 10.8021 3.55208 10.9236C3.63889 10.9514 3.72222 10.9826 3.80208 11.007C4.27431 11.1667 4.63542 11.2882 5.02083 11.3021C5.31945 11.3125 5.59375 11.2465 5.76389 11.1389C5.90625 11.0521 5.97222 10.9479 5.96875 10.7743C5.96875 10.6736 5.94097 10.6007 5.76389 10.4896C5.54514 10.3507 5.22917 10.25 4.79167 10.1181L4.73264 10.1007C4.35417 9.98612 3.87847 9.84376 3.49653 9.61459C3.05556 9.34723 2.64236 8.90279 2.63889 8.2014C2.63542 7.46876 3.04861 6.96182 3.53472 6.67709C3.77431 6.53473 4.03819 6.44098 4.30556 6.38195V5.8889C4.30556 5.50695 4.61806 5.19445 5 5.19445C5.38194 5.19445 5.69444 5.50695 5.69444 5.8889Z"
                  fill="white"
                />
              </svg>

              <p>100 Bs.</p>
            </div>
          </div>
          <div className="user">
            <div className="avatar">
              {" "}
              <img src={mariana} alt="Nombre Descriptivo" />
              <p>Mariana Reyes</p>
            </div>
            <p className="date">20/10/2023</p>
            <div className="pesos">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.22222 2.83334C0.996528 2.83334 0 3.82987 0 5.05557V13.9445C0 15.1701 0.996528 16.1667 2.22222 16.1667H17.7778C19.0035 16.1667 20 15.1701 20 13.9445V5.05557C20 3.82987 19.0035 2.83334 17.7778 2.83334H2.22222ZM9.44444 7.27779H17.2222C17.5278 7.27779 17.7778 7.52779 17.7778 7.83334C17.7778 8.1389 17.5278 8.3889 17.2222 8.3889H9.44444C9.13889 8.3889 8.88889 8.1389 8.88889 7.83334C8.88889 7.52779 9.13889 7.27779 9.44444 7.27779ZM8.88889 11.1667C8.88889 10.8611 9.13889 10.6111 9.44444 10.6111H17.2222C17.5278 10.6111 17.7778 10.8611 17.7778 11.1667C17.7778 11.4722 17.5278 11.7222 17.2222 11.7222H9.44444C9.13889 11.7222 8.88889 11.4722 8.88889 11.1667ZM5.69444 5.8889V6.37154C5.95486 6.4132 6.20139 6.47223 6.42708 6.53473C6.79861 6.63195 7.01736 7.0139 6.92014 7.38543C6.82292 7.75696 6.44097 7.97571 6.06944 7.87848C5.6875 7.77779 5.31945 7.70487 4.98611 7.69793C4.71181 7.69446 4.43056 7.76043 4.23958 7.87154C4.07292 7.96876 4.02431 8.06598 4.02431 8.19445C4.02431 8.25695 4.02778 8.31598 4.20833 8.42709C4.42708 8.55904 4.74653 8.65973 5.19097 8.79168L5.21528 8.79862C5.60417 8.91668 6.10417 9.06598 6.50347 9.31946C6.95139 9.60071 7.34722 10.059 7.35764 10.7639C7.36806 11.4896 6.99306 12.0174 6.49653 12.3264C6.24653 12.4826 5.96875 12.5799 5.69097 12.6389V13.1111C5.69097 13.4931 5.37847 13.8056 4.99653 13.8056C4.61458 13.8056 4.30208 13.4931 4.30208 13.1111V12.6042C3.94444 12.5278 3.60764 12.4132 3.32292 12.3125C3.25 12.2882 3.18056 12.2639 3.11111 12.2396C2.74653 12.1181 2.55208 11.7257 2.67361 11.3611C2.79514 10.9965 3.1875 10.8021 3.55208 10.9236C3.63889 10.9514 3.72222 10.9826 3.80208 11.007C4.27431 11.1667 4.63542 11.2882 5.02083 11.3021C5.31945 11.3125 5.59375 11.2465 5.76389 11.1389C5.90625 11.0521 5.97222 10.9479 5.96875 10.7743C5.96875 10.6736 5.94097 10.6007 5.76389 10.4896C5.54514 10.3507 5.22917 10.25 4.79167 10.1181L4.73264 10.1007C4.35417 9.98612 3.87847 9.84376 3.49653 9.61459C3.05556 9.34723 2.64236 8.90279 2.63889 8.2014C2.63542 7.46876 3.04861 6.96182 3.53472 6.67709C3.77431 6.53473 4.03819 6.44098 4.30556 6.38195V5.8889C4.30556 5.50695 4.61806 5.19445 5 5.19445C5.38194 5.19445 5.69444 5.50695 5.69444 5.8889Z"
                  fill="white"
                />
              </svg>

              <p>100 Bs.</p>
            </div>
          </div>
          <div className="user">
            <div className="avatar">
              <img src={julio} alt="Nombre Descriptivo" />
              <p>Julio Espinosa</p>
            </div>
            <p className="date">20/10/2023</p>
            <div className="pesos">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.22222 2.83334C0.996528 2.83334 0 3.82987 0 5.05557V13.9445C0 15.1701 0.996528 16.1667 2.22222 16.1667H17.7778C19.0035 16.1667 20 15.1701 20 13.9445V5.05557C20 3.82987 19.0035 2.83334 17.7778 2.83334H2.22222ZM9.44444 7.27779H17.2222C17.5278 7.27779 17.7778 7.52779 17.7778 7.83334C17.7778 8.1389 17.5278 8.3889 17.2222 8.3889H9.44444C9.13889 8.3889 8.88889 8.1389 8.88889 7.83334C8.88889 7.52779 9.13889 7.27779 9.44444 7.27779ZM8.88889 11.1667C8.88889 10.8611 9.13889 10.6111 9.44444 10.6111H17.2222C17.5278 10.6111 17.7778 10.8611 17.7778 11.1667C17.7778 11.4722 17.5278 11.7222 17.2222 11.7222H9.44444C9.13889 11.7222 8.88889 11.4722 8.88889 11.1667ZM5.69444 5.8889V6.37154C5.95486 6.4132 6.20139 6.47223 6.42708 6.53473C6.79861 6.63195 7.01736 7.0139 6.92014 7.38543C6.82292 7.75696 6.44097 7.97571 6.06944 7.87848C5.6875 7.77779 5.31945 7.70487 4.98611 7.69793C4.71181 7.69446 4.43056 7.76043 4.23958 7.87154C4.07292 7.96876 4.02431 8.06598 4.02431 8.19445C4.02431 8.25695 4.02778 8.31598 4.20833 8.42709C4.42708 8.55904 4.74653 8.65973 5.19097 8.79168L5.21528 8.79862C5.60417 8.91668 6.10417 9.06598 6.50347 9.31946C6.95139 9.60071 7.34722 10.059 7.35764 10.7639C7.36806 11.4896 6.99306 12.0174 6.49653 12.3264C6.24653 12.4826 5.96875 12.5799 5.69097 12.6389V13.1111C5.69097 13.4931 5.37847 13.8056 4.99653 13.8056C4.61458 13.8056 4.30208 13.4931 4.30208 13.1111V12.6042C3.94444 12.5278 3.60764 12.4132 3.32292 12.3125C3.25 12.2882 3.18056 12.2639 3.11111 12.2396C2.74653 12.1181 2.55208 11.7257 2.67361 11.3611C2.79514 10.9965 3.1875 10.8021 3.55208 10.9236C3.63889 10.9514 3.72222 10.9826 3.80208 11.007C4.27431 11.1667 4.63542 11.2882 5.02083 11.3021C5.31945 11.3125 5.59375 11.2465 5.76389 11.1389C5.90625 11.0521 5.97222 10.9479 5.96875 10.7743C5.96875 10.6736 5.94097 10.6007 5.76389 10.4896C5.54514 10.3507 5.22917 10.25 4.79167 10.1181L4.73264 10.1007C4.35417 9.98612 3.87847 9.84376 3.49653 9.61459C3.05556 9.34723 2.64236 8.90279 2.63889 8.2014C2.63542 7.46876 3.04861 6.96182 3.53472 6.67709C3.77431 6.53473 4.03819 6.44098 4.30556 6.38195V5.8889C4.30556 5.50695 4.61806 5.19445 5 5.19445C5.38194 5.19445 5.69444 5.50695 5.69444 5.8889Z"
                  fill="white"
                />
              </svg>

              <p>100 Bs.</p>
            </div>
          </div>
        </div>
        <div className="clientes">
          {" "}
          <div className="header-client">
            <p>Realizar pedido</p>
            <button>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 7.5H13.25C13.4489 7.5 13.6397 7.57902 13.7803 7.71967C13.921 7.86032 14 8.05109 14 8.25C14 8.44891 13.921 8.63968 13.7803 8.78033C13.6397 8.92098 13.4489 9 13.25 9H5.75C5.55109 9 5.36032 8.92098 5.21967 8.78033C5.07902 8.63968 5 8.44891 5 8.25C5 8.05109 5.07902 7.86032 5.21967 7.71967C5.36032 7.57902 5.55109 7.5 5.75 7.5ZM5.75 12.5H13.25C13.4489 12.5 13.6397 12.579 13.7803 12.7197C13.921 12.8603 14 13.0511 14 13.25C14 13.4489 13.921 13.6397 13.7803 13.7803C13.6397 13.921 13.4489 14 13.25 14H5.75C5.55109 14 5.36032 13.921 5.21967 13.7803C5.07902 13.6397 5 13.4489 5 13.25C5 13.0511 5.07902 12.8603 5.21967 12.7197C5.36032 12.579 5.55109 12.5 5.75 12.5ZM1.75 2.5H8.25C8.44891 2.5 8.63968 2.57902 8.78033 2.71967C8.92098 2.86032 9 3.05109 9 3.25C9 3.44891 8.92098 3.63968 8.78033 3.78033C8.63968 3.92098 8.44891 4 8.25 4H1.75C1.55109 4 1.36032 3.92098 1.21967 3.78033C1.07902 3.63968 1 3.44891 1 3.25C1 3.05109 1.07902 2.86032 1.21967 2.71967C1.36032 2.57902 1.55109 2.5 1.75 2.5ZM2 14C1.73478 14 1.48043 13.8946 1.29289 13.7071C1.10536 13.5196 1 13.2652 1 13C1 12.7348 1.10536 12.4804 1.29289 12.2929C1.48043 12.1054 1.73478 12 2 12C2.26522 12 2.51957 12.1054 2.70711 12.2929C2.89464 12.4804 3 12.7348 3 13C3 13.2652 2.89464 13.5196 2.70711 13.7071C2.51957 13.8946 2.26522 14 2 14ZM3 8C3 8.26522 2.89464 8.51957 2.70711 8.70711C2.51957 8.89464 2.26522 9 2 9C1.73478 9 1.48043 8.89464 1.29289 8.70711C1.10536 8.51957 1 8.26522 1 8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7C2.26522 7 2.51957 7.10536 2.70711 7.29289C2.89464 7.48043 3 7.73478 3 8ZM13.314 4.918L11.07 2.417C11.0377 2.38106 11.0166 2.33655 11.0091 2.28884C11.0016 2.24113 11.008 2.19227 11.0277 2.14816C11.0474 2.10405 11.0794 2.06659 11.1199 2.0403C11.1604 2.014 11.2077 2.00001 11.256 2H15.744C15.7923 2.00001 15.8396 2.014 15.8801 2.0403C15.9206 2.06659 15.9526 2.10405 15.9723 2.14816C15.992 2.19227 15.9984 2.24113 15.9909 2.28884C15.9834 2.33655 15.9623 2.38106 15.93 2.417L13.686 4.917C13.6626 4.94311 13.6339 4.96398 13.6018 4.97828C13.5698 4.99257 13.5351 4.99996 13.5 4.99996C13.4649 4.99996 13.4302 4.99257 13.3982 4.97828C13.3661 4.96398 13.3374 4.94311 13.314 4.917V4.918Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
          <div className="form-classes">
            <form className="select">
              <select className="style-select">
                <option>Cliente</option>
              </select>
              <select className="style-select">
                <option>Botellon de 20 Lts</option>
              </select>
              <div className="block-cantidad">
                {" "}
                <div className="container-cantidad">
                  <p>Cantidad</p>
                  <div className="cantidad">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 9V11H15V9H5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
                        fill="#626262"
                      />
                    </svg>
                    <p>1</p>{" "}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 15H11V11H15V9H11V5H9V9H5V11H9V15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z"
                        fill="#626262"
                      />
                    </svg>
                  </div>
                </div>
                <div className="numero-bs">
                  <p>15</p>
                  <span>Bs</span>
                </div>
              </div>

              <div className="buton-pedido">
                <button>Realizar pedido</button>
              </div>
            </form>
          </div>
        </div>
        <div className="possible-info"></div>
      </div>
    </section>
  );
};

export default Clientes;