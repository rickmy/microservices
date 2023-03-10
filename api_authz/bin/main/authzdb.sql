PGDMP                          {            authz    15.1    15.1 !               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                        1262    16561    authz    DATABASE     z   CREATE DATABASE authz WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Ecuador.1252';
    DROP DATABASE authz;
                postgres    false            ?            1259    16563    authorities    TABLE     ?   CREATE TABLE public.authorities (
    id bigint NOT NULL,
    endpoint character varying(255),
    name character varying(255)
);
    DROP TABLE public.authorities;
       public         heap    postgres    false            ?            1259    16562    authorities_id_seq    SEQUENCE     {   CREATE SEQUENCE public.authorities_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.authorities_id_seq;
       public          postgres    false    215            !           0    0    authorities_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.authorities_id_seq OWNED BY public.authorities.id;
          public          postgres    false    214            ?            1259    16572    roles    TABLE     y   CREATE TABLE public.roles (
    id bigint NOT NULL,
    enabled boolean DEFAULT true,
    name character varying(255)
);
    DROP TABLE public.roles;
       public         heap    postgres    false            ?            1259    16579    roles_authorities    TABLE     i   CREATE TABLE public.roles_authorities (
    role_id bigint NOT NULL,
    authority_id bigint NOT NULL
);
 %   DROP TABLE public.roles_authorities;
       public         heap    postgres    false            ?            1259    16571    roles_id_seq    SEQUENCE     u   CREATE SEQUENCE public.roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    217            "           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    216            ?            1259    16583    users    TABLE     ?   CREATE TABLE public.users (
    id bigint NOT NULL,
    enabled boolean NOT NULL,
    expired boolean NOT NULL,
    looked boolean NOT NULL,
    name character varying(255),
    password character varying(255),
    username character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    16582    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    220            #           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    219            ?            1259    16591    users_roles    TABLE     ^   CREATE TABLE public.users_roles (
    user_id bigint NOT NULL,
    role_id bigint NOT NULL
);
    DROP TABLE public.users_roles;
       public         heap    postgres    false            w           2604    16566    authorities id    DEFAULT     p   ALTER TABLE ONLY public.authorities ALTER COLUMN id SET DEFAULT nextval('public.authorities_id_seq'::regclass);
 =   ALTER TABLE public.authorities ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            x           2604    16575    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217            z           2604    16586    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220                      0    16563    authorities 
   TABLE DATA           9   COPY public.authorities (id, endpoint, name) FROM stdin;
    public          postgres    false    215   r#                 0    16572    roles 
   TABLE DATA           2   COPY public.roles (id, enabled, name) FROM stdin;
    public          postgres    false    217   &                 0    16579    roles_authorities 
   TABLE DATA           B   COPY public.roles_authorities (role_id, authority_id) FROM stdin;
    public          postgres    false    218   P&                 0    16583    users 
   TABLE DATA           W   COPY public.users (id, enabled, expired, looked, name, password, username) FROM stdin;
    public          postgres    false    220   ?&                 0    16591    users_roles 
   TABLE DATA           7   COPY public.users_roles (user_id, role_id) FROM stdin;
    public          postgres    false    221   ?'       $           0    0    authorities_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.authorities_id_seq', 53, true);
          public          postgres    false    214            %           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 3, true);
          public          postgres    false    216            &           0    0    users_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.users_id_seq', 3, true);
          public          postgres    false    219            |           2606    16570    authorities authorities_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.authorities
    ADD CONSTRAINT authorities_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.authorities DROP CONSTRAINT authorities_pkey;
       public            postgres    false    215            ~           2606    16578    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    217            ?           2606    16590    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220            ?           2606    16609 '   users_roles fk2o0jvgh89lemvvo17cbqvdxaa    FK CONSTRAINT     ?   ALTER TABLE ONLY public.users_roles
    ADD CONSTRAINT fk2o0jvgh89lemvvo17cbqvdxaa FOREIGN KEY (user_id) REFERENCES public.users(id);
 Q   ALTER TABLE ONLY public.users_roles DROP CONSTRAINT fk2o0jvgh89lemvvo17cbqvdxaa;
       public          postgres    false    3200    220    221            ?           2606    16604 '   users_roles fkj6m8fwv7oqv74fcehir1a9ffy    FK CONSTRAINT     ?   ALTER TABLE ONLY public.users_roles
    ADD CONSTRAINT fkj6m8fwv7oqv74fcehir1a9ffy FOREIGN KEY (role_id) REFERENCES public.roles(id);
 Q   ALTER TABLE ONLY public.users_roles DROP CONSTRAINT fkj6m8fwv7oqv74fcehir1a9ffy;
       public          postgres    false    221    3198    217            ?           2606    16599 -   roles_authorities fkq3iqpff34tgtkvnn545a648cb    FK CONSTRAINT     ?   ALTER TABLE ONLY public.roles_authorities
    ADD CONSTRAINT fkq3iqpff34tgtkvnn545a648cb FOREIGN KEY (role_id) REFERENCES public.roles(id);
 W   ALTER TABLE ONLY public.roles_authorities DROP CONSTRAINT fkq3iqpff34tgtkvnn545a648cb;
       public          postgres    false    3198    217    218            ?           2606    16594 -   roles_authorities fkt69njxcgfcto5wcrd9ocmb35h    FK CONSTRAINT     ?   ALTER TABLE ONLY public.roles_authorities
    ADD CONSTRAINT fkt69njxcgfcto5wcrd9ocmb35h FOREIGN KEY (authority_id) REFERENCES public.authorities(id);
 W   ALTER TABLE ONLY public.roles_authorities DROP CONSTRAINT fkt69njxcgfcto5wcrd9ocmb35h;
       public          postgres    false    3196    218    215               ?  x???[o? ???I?r?[?D[?I??D}?dQCZ$?Xgʦ??? ^_"+?;????N????çv$z???(~?gF8i?e?Ǟ0D sB?+??/?H2y????A????5??<?U?AA??????5̔?q??-FGO?W?lL?V????	??qc?,':?u?????j2Im!???K?Y2p?oTX\??^?*?$7?1?}?ds#jɮ&?????h???lco?<???6d?r?&?1??ZS\7?\???s?nOl?M?m|??r??0?O[7?NUӕu??h?y??A?͵??)??	)?0?{;???;[?0?,????S?,??O???q?؞)??-ά7???WS?rU?﬘x??{e?à?X??a????w?4?)?I???%=Nю֜????ğyM?j?Kq?l!ڡ??v???i`%B?-?????̂??&T-?o?L???|??Z?If?<q>??*?:???մ???Z?3???59??V???b?W?"Q?????xu??<wd?($T?"??s?g??!?E??*?nlkܨ????????q?? o6~D?????4A?or?Hh?`?A?o??'f%X?/}?g ??o???78#p!?j?/??J?H??鏫????f?Eg?????? ??}U         0   x?3?,???q?wt????2?qC<]?B??a.??!?A\1z\\\ g??         y   x????0???bnb;????q+҃X?j?4ܤY?n??nN?4???????????Da
??0?)La
S???E?s(B?P?"??{?i?????????pEƺ?AOkO??6J??????#?         ?   x?5??r?0  ?s?=p???Q?X?(V ??%쥐?~}mG?ݟF?=,??h??ƒ??????B???=??"???R????N?'??]ti?t_???_?g??.???V?<??,$=ǎ??>ѐ?~?u/??^+%=?:a?2?g????4?????YQo^w?^?Q?H?Ɓ9to???jr??:???J/M???#??e~?Ū??.P?~? ????M?            x?3?4?2?4?2?4?????? A     