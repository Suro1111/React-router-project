import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Header } from "./pages/Header/Header";
import { Notefound } from "./pages/NoteFound/Notefound";
import { Albums } from "./pages/Albums/Albums";
import { Comments } from "./pages/Comments/Comments";
import { Photos } from "./pages/Photos/Photos";
import { Posts } from "./pages/Posts/Posts";
import { Todos } from "./pages/Todos/Todos";
import { Users } from "./pages/Users/Users";
import { AlbumInfo } from "./pages/AlbumInfo/AlbumInfo";
import { ComentInfo } from "./pages/CommentInfo/ComentInfo";
import { PhotoInfo } from "./pages/PhotoInfo/PhotoInfo";
import { PostInfo } from "./pages/PostInfo/PostInfo";
import { UserInfo } from "./pages/UserInfo/UserInfo";

export function App({ myData, albums, comments, photos, posts, todos, users }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout myData={myData} />}>
          <Route index element={<Header />} />
          <Route path="albums" element={<Albums albums={albums} />} />
          <Route path="comments" element={<Comments comments={comments} />} />
          <Route path="photos" element={<Photos photos={photos} />} />
          <Route path="posts" element={<Posts posts={posts} />} />
          <Route path="todos" element={<Todos todos={todos} />} />
          <Route path="users" element={<Users users={users} />} />
          <Route path="albums/:id" element={<AlbumInfo albums={albums} />} />
          <Route
            path="comments/:id"
            element={<ComentInfo comments={comments} />}
          />
          <Route path="photos/:id" element={<PhotoInfo photos={photos} />} />
          <Route path="posts/:id" element={<PostInfo posts={posts} />} />
          <Route path="users/:id" element={<UserInfo users={users}/>}/>
          <Route path="*" element={<Notefound />} />
        </Route>
      </Routes>
    </>
  );
}
