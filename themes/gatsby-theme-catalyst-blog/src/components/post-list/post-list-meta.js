/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostListMeta = props => {
  return (
    <Styled.p
      sx={{
        color: "darkgrey",
        fontSize: 1,
        textTransform: "uppercase",
        letterSpacing: "wider",
        m: 0,
      }}
    >
      {props.children}
    </Styled.p>
  )
}

export default PostListMeta