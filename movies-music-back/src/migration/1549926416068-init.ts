import {MigrationInterface, QueryRunner} from "typeorm";

export class init1549926416068 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        INSERT INTO public."user" (id, name, email, password) VALUES ('5bfec050-4639-4547-b803-3ce856d1cd21', 'valentin', 'email', 'password');


INSERT INTO public.film (id, cover, description, "dateCreated", title)
 VALUES ('26d14640-8e9f-4aee-aeab-ef46627fde35', 'asd', 'asdadasd', '2019-02-10 17:11:53.045556+00', 'Lord Of The Rings');


INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('80984643-74ef-462f-8c52-835d4496ca2d', 'Romeo Santos', 'The final countdown', 12, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('35bdae96-6e3f-4f3c-b986-9074168d855f', 'Shakira', 'The final countdown', 123, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('c5663dae-88a8-4dfb-b5f8-faebf63e79f4', 'Ranco', 'The final countdown', 64, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('a9ed2c71-c988-4e8a-982a-5d48236dd722', 'Callejeros', 'The final countdown', 245, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('9af4af92-f91b-43aa-b4fb-3199d8656498', 'Frida', 'The final countdown', 300, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('979ddcaa-da78-41c4-bf91-7b35efd4b751', 'Count', 'The final countdown', 100, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('804293ef-82b8-440a-8a21-2cf9fdc8f1b7', 'Los Cafres', 'The final countdown', 240, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('ec784140-ace1-4ea2-af7c-e4637cc4a65b', 'Anderson pak', 'The final countdown', 605, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('d1992c24-904d-4d34-9039-265a03e86c3b', 'Blue eyes', 'Gimme me', 120, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('4c1b24d2-9765-4e68-9912-3b7cc768e6b5', 'Peter', 'The final countdown', 86, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('d6883306-8b02-4fe5-b84f-ec9e1813b6cf', 'Stranger things', 'The final countdown', 250, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('3736e698-3c95-4da0-ab09-6f55f786fe48', 'Trim', 'The final countdown', 10, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('454f9bd4-14d8-442d-b58f-891537c91817', 'Toto', 'The final countdown', 778, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('c40d2aac-f5aa-42d8-868c-2e24ab9c540c', 'Debussi', 'The final countdown', 240, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('691ffd58-ffab-4064-a3d3-517441b55f21', 'Charly', 'The final countdown', 65, 'K-pop');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('e97602c0-c1cc-4b90-96b2-9bf283865660', 'asd', 'asd', 23, 'asd');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('32a23c1e-a625-4fe0-8de3-1c2b0ab7465b', '123123', '1233', 123, '12312');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('dcc2393c-f349-48be-9148-58895cbffa26', '123', '123', 12, '123');
INSERT INTO public.song (id, artist, title, duration, genre) VALUES ('ae09d16b-eb91-49df-ae61-2f66a9202fc4', 'asdasd', 'asdasd', 123, 'asdasd');


INSERT INTO public.licensing_process_status (id, name, description) VALUES ('8780e0bb-5748-480e-a621-8a2c11acfa7a', 'Research', '');
INSERT INTO public.licensing_process_status (id, name, description) VALUES ('34f00bc0-8e3a-4c49-b823-93addd3dd2bf', 'Negotiation', '');
INSERT INTO public.licensing_process_status (id, name, description) VALUES ('5affe0b7-9f93-4cf1-9172-e7f62888fe21', 'Payment', '');
INSERT INTO public.licensing_process_status (id, name, description) VALUES ('d91a4f38-40ea-42fb-8c2c-b75a8bbbaa5c', 'Legal Depart', '');

INSERT INTO public.licensing_process (id, flags, "filmId", "songId", "statusId") VALUES ('d00b9e19-0f7f-4cff-8e64-5a0c9d70f494', 0, '26d14640-8e9f-4aee-aeab-ef46627fde35', '804293ef-82b8-440a-8a21-2cf9fdc8f1b7', 'd91a4f38-40ea-42fb-8c2c-b75a8bbbaa5c');
INSERT INTO public.licensing_process (id, flags, "filmId", "songId", "statusId") VALUES ('be2fb4b7-9950-4eaf-8496-b8bcc3d60be5', 0, '26d14640-8e9f-4aee-aeab-ef46627fde35', 'e97602c0-c1cc-4b90-96b2-9bf283865660', '34f00bc0-8e3a-4c49-b823-93addd3dd2bf');
INSERT INTO public.licensing_process (id, flags, "filmId", "songId", "statusId") VALUES ('2674fdf6-7a75-40ea-9caf-16dd5516902e', 0, '26d14640-8e9f-4aee-aeab-ef46627fde35', '4c1b24d2-9765-4e68-9912-3b7cc768e6b5', 'd91a4f38-40ea-42fb-8c2c-b75a8bbbaa5c');
INSERT INTO public.licensing_process (id, flags, "filmId", "songId", "statusId") VALUES ('837a2b98-2dae-4029-bf12-e2af7714accf', 0, '26d14640-8e9f-4aee-aeab-ef46627fde35', '32a23c1e-a625-4fe0-8de3-1c2b0ab7465b', '5affe0b7-9f93-4cf1-9172-e7f62888fe21');
INSERT INTO public.licensing_process (id, flags, "filmId", "songId", "statusId") VALUES ('dc4bb9a3-d2ba-4fef-a1f4-3de90db0657d', 0, '26d14640-8e9f-4aee-aeab-ef46627fde35', 'dcc2393c-f349-48be-9148-58895cbffa26', '8780e0bb-5748-480e-a621-8a2c11acfa7a');
INSERT INTO public.licensing_process (id, flags, "filmId", "songId", "statusId") VALUES ('2d224467-40f1-44ca-b1f1-01f5d55db64d', 0, '26d14640-8e9f-4aee-aeab-ef46627fde35', 'ae09d16b-eb91-49df-ae61-2f66a9202fc4', 'd91a4f38-40ea-42fb-8c2c-b75a8bbbaa5c');
INSERT INTO public.licensing_process (id, flags, "filmId", "songId", "statusId") VALUES ('c152b5e5-5abf-49bc-ae87-4467fcd28cbe', 0, '26d14640-8e9f-4aee-aeab-ef46627fde35', 'd1992c24-904d-4d34-9039-265a03e86c3b', '34f00bc0-8e3a-4c49-b823-93addd3dd2bf');
INSERT INTO public.licensing_process (id, flags, "filmId", "songId", "statusId") VALUES ('b84fb737-6f75-4854-961b-c598aa2ed1d2', 0, '26d14640-8e9f-4aee-aeab-ef46627fde35', '80984643-74ef-462f-8c52-835d4496ca2d', '8780e0bb-5748-480e-a621-8a2c11acfa7a');


INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('b0da6459-d3ef-42f3-b802-a5fa3e291339', 'desc', '1', '3', '26d14640-8e9f-4aee-aeab-ef46627fde35', 'c152b5e5-5abf-49bc-ae87-4467fcd28cbe', 145, 170, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('2bdd6ee5-df9f-4178-a2c4-287ab07ada7e', 'desc', '2', '4', '26d14640-8e9f-4aee-aeab-ef46627fde35', '2674fdf6-7a75-40ea-9caf-16dd5516902e', 750, 800, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('dc65f6f4-f06a-4356-ac6b-83f9db69d835', 'desc', '2', '2', '26d14640-8e9f-4aee-aeab-ef46627fde35', 'c152b5e5-5abf-49bc-ae87-4467fcd28cbe', 406, 500, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('52a30e4f-8528-4348-ad4a-245b9b280305', 'desc', '1', '2', '26d14640-8e9f-4aee-aeab-ef46627fde35', '2674fdf6-7a75-40ea-9caf-16dd5516902e', 40, 45.56, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('daf4bc78-a86f-420d-b1a3-2a637cc42218', 'desc', '1', '4', '26d14640-8e9f-4aee-aeab-ef46627fde35', 'b84fb737-6f75-4854-961b-c598aa2ed1d2', 222.22, 250, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('ffdf55a5-1605-4429-832a-230157b206a9', 'desc', '1', '1', '26d14640-8e9f-4aee-aeab-ef46627fde35', 'd00b9e19-0f7f-4cff-8e64-5a0c9d70f494', 0, 12.5, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('63ce73e4-7ec1-47bc-8869-1ef0999773a5', 'desc', '2', '1', '26d14640-8e9f-4aee-aeab-ef46627fde35', 'be2fb4b7-9950-4eaf-8496-b8bcc3d60be5', 260, 270, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('8827f884-3507-4903-b31a-d8673742ada0', 'desc', '2', '3', '26d14640-8e9f-4aee-aeab-ef46627fde35', '837a2b98-2dae-4029-bf12-e2af7714accf', 550, 700, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('3215da6a-f8a6-488f-af0c-7fe2a2dfd5de', '1', '1', '1', '26d14640-8e9f-4aee-aeab-ef46627fde35', 'dc4bb9a3-d2ba-4fef-a1f4-3de90db0657d', null, null, null);
INSERT INTO public.track (id, "sceneDescription", reel, "cueNumber", "filmId", "licensingProcessId", start, "end", sequence)
VALUES ('7308ac18-e16f-445f-b36d-1c8aab840cce', '123123', '2', '3', '26d14640-8e9f-4aee-aeab-ef46627fde35', '2d224467-40f1-44ca-b1f1-01f5d55db64d', null, null, null);


        `)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
