PGDMP                     	    |            password_manager    15.6    15.6                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    26027    password_manager    DATABASE     r   CREATE DATABASE password_manager WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
     DROP DATABASE password_manager;
                postgres    false            �            1259    26029 	   passwords    TABLE     �   CREATE TABLE public.passwords (
    id integer NOT NULL,
    description text NOT NULL,
    encryption_type text NOT NULL,
    password_encrypted text NOT NULL
);
    DROP TABLE public.passwords;
       public         heap    postgres    false            �            1259    26028    passwords_id_seq    SEQUENCE     �   CREATE SEQUENCE public.passwords_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.passwords_id_seq;
       public          postgres    false    215                       0    0    passwords_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.passwords_id_seq OWNED BY public.passwords.id;
          public          postgres    false    214            o           2604    26032    passwords id    DEFAULT     l   ALTER TABLE ONLY public.passwords ALTER COLUMN id SET DEFAULT nextval('public.passwords_id_seq'::regclass);
 ;   ALTER TABLE public.passwords ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215                      0    26029 	   passwords 
   TABLE DATA           Y   COPY public.passwords (id, description, encryption_type, password_encrypted) FROM stdin;
    public          postgres    false    215   �
       	           0    0    passwords_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.passwords_id_seq', 6, true);
          public          postgres    false    214            q           2606    26036    passwords passwords_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.passwords
    ADD CONSTRAINT passwords_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.passwords DROP CONSTRAINT passwords_pkey;
       public            postgres    false    215               �  x�]�I��@ @ѱ���9'� 
�?�i�ޓ	���}���!��(��J����{��G�q�y�q����K<t9�WҞg��%����r㋇v��\���4F8���_�aGA�q�9j5���)����L�aLV��c��"ܩ/��JEg��I� (ŤY<fB����H�6ಝOd���f=߄�N=�����7ɴ��-�R�Ԗ���:�z�Dd�s |���z�����Ё���~�f�6L'RW�+���|&'�0�4{�j���v� >�d����7��Ij3�����ɂ�(��VQ51���8��PU.;1&m�:��\�A�($T��-�%���U������/���m�=����d7Rʾ�:�䗐2,�A�H\FE!H��i��ު�~O��m�^����
     