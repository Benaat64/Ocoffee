--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3 (Ubuntu 15.3-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.3 (Ubuntu 15.3-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: coffee; Type: TABLE; Schema: public; Owner: benat
--

CREATE TABLE public.coffee (
    id integer NOT NULL,
    name character varying(64) NOT NULL,
    description text,
    reference integer NOT NULL,
    origine character varying(64) NOT NULL,
    prix numeric(5,2) NOT NULL,
    "caractéristique" character varying(64),
    disponible boolean NOT NULL,
    date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.coffee OWNER TO benat;

--
-- Name: coffee_id_seq; Type: SEQUENCE; Schema: public; Owner: benat
--

CREATE SEQUENCE public.coffee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.coffee_id_seq OWNER TO benat;

--
-- Name: coffee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: benat
--

ALTER SEQUENCE public.coffee_id_seq OWNED BY public.coffee.id;


--
-- Name: coffee id; Type: DEFAULT; Schema: public; Owner: benat
--

ALTER TABLE ONLY public.coffee ALTER COLUMN id SET DEFAULT nextval('public.coffee_id_seq'::regclass);


--
-- Data for Name: coffee; Type: TABLE DATA; Schema: public; Owner: benat
--

COPY public.coffee (id, name, description, reference, origine, prix, "caractéristique", disponible, date) FROM stdin;
1	Espresso	Café fort et concentré préparé en faisant passer de l'eau chaude à travers du café finement moulu.	100955890	Italie	20.99	Corsé	t	2024-06-03 17:50:28.509617
2	Columbian	Café moyennement corsé avec une acidité vive et une saveur riche.	100955894	Colombie	18.75	Acide	t	2024-06-03 17:50:28.509617
3	Ethiopian Yirgacheffe	Réputé pour son arôme floral, son acidité vive et ses notes de saveur citronnée.	105589090	Éthiopie	22.50	Fruité	t	2024-06-03 17:50:28.509617
4	Brazilian Santos	Café doux et lisse avec un profil de saveur de noisette.	134009550	Brésil	17.80	Doux	t	2024-06-03 17:50:28.509617
5	Guatemalan Antigua	Café corsé avec des nuances chocolatées et une pointe d'épice.	256505890	Guatemala	21.25	Corsé	t	2024-06-03 17:50:28.509617
6	Kenyan AA	Café corsé avec des nuances chocolatées et une pointe d'épice.	295432730	Kenya	23.70	Acide	t	2024-06-03 17:50:28.509617
7	Sumatra Mandheling	Café profond et terreux avec un corps lourd et une faible acidité.	302932754	Indonésie	19.95	Corsé	t	2024-06-03 17:50:28.509617
8	Costa Rican Tarrazu	Café vif et net avec une finition propre et une acidité vive.	327302954	Costa Rica	24.50	Acide	t	2024-06-03 17:50:28.509617
9	Vietnamese Robusta	Café audacieux et fort avec une saveur robuste distinctive.	549549090	Vietnam	16.75	Épicé	t	2024-06-03 17:50:28.509617
10	Tanzanian Peaberry	Acidité vive avec un profil de saveur rappelant le vin et un corps moyen.	582954954	Tanzanie	26.80	Fruité	t	2024-06-03 17:50:28.509617
11	Jamaican Blue Mountain	Reconnu pour sa saveur douce, son acidité vive et son absence d'amertume.	589100954	Jamaïque	39.25	Doux	t	2024-06-03 17:50:28.509617
12	Rwandan Bourbon	Café avec des notes florales prononcées, une acidité vive et un corps moyen.	650753915	Rwanda	21.90	Fruité	t	2024-06-03 17:50:28.509617
13	Panamanian Geisha	Café rare aux arômes floraux complexes, une acidité brillante et un profil de saveur distinctif.	795501340	Panama	42.00	Fruité	t	2024-06-03 17:50:28.509617
14	Peruvian Arabica	Café équilibré avec des notes de chocolat, une acidité modérée et un corps velouté.	954589100	Pérou	19.40	Chocolaté	f	2024-06-03 17:50:28.509617
15	Hawaiian Kona	Café rare au goût riche, une acidité douce et des nuances subtiles.	958090105	Hawaï	55.75	Doux	f	2024-06-03 17:50:28.509617
16	Nicaraguan Maragogipe	Café avec des notes de fruits, une acidité vive et un corps plein.	691550753	Nicaragua	28.60	Fruité	f	2024-06-03 17:50:28.509617
\.


--
-- Name: coffee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: benat
--

SELECT pg_catalog.setval('public.coffee_id_seq', 16, true);


--
-- Name: coffee coffee_pkey; Type: CONSTRAINT; Schema: public; Owner: benat
--

ALTER TABLE ONLY public.coffee
    ADD CONSTRAINT coffee_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

