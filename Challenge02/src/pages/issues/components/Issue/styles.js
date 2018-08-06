import { StyleSheet } from 'react-native';
import { metrics, general } from 'styles';
const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    marginTop: metrics.baseMargin,
    alignItems: 'center',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoContainer: {
    flexDirection: 'column',
    width: metrics.screenWidth / 2,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: metrics.baseMargin,
  },
  buttonIssue: {
    marginRight: 20,
  },
});
export default styles;
